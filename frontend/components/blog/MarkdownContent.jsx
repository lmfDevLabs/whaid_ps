import React from "react";

const isSafeHref = (href = "") => /^(https?:\/\/|mailto:|\/)/i.test(href);

const renderInline = (text, keyPrefix = "inline") => {
  const nodes = [];
  const pattern = /(\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      nodes.push(<strong key={`${keyPrefix}-strong-${index}`}>{match[2]}</strong>);
    } else if (match[3]) {
      nodes.push(<em key={`${keyPrefix}-em-${index}`}>{match[3]}</em>);
    } else if (match[4] && isSafeHref(match[5])) {
      nodes.push(
        <a key={`${keyPrefix}-link-${index}`} href={match[5]} target="_blank" rel="noreferrer">
          {match[4]}
        </a>,
      );
    } else {
      nodes.push(match[0]);
    }

    lastIndex = pattern.lastIndex;
    index += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const flushList = (blocks, listItems, listType, key) => {
  if (!listItems.length) return;
  const ListTag = listType === "ol" ? "ol" : "ul";
  blocks.push(
    <ListTag className="post-list" key={`list-${key}`}>
      {listItems.map((item, index) => (
        <li key={`item-${key}-${index}`}>{renderInline(item, `list-${key}-${index}`)}</li>
      ))}
    </ListTag>,
  );
};

function parseMarkdown(content) {
  const lines = String(content || "").split(/\r?\n/);
  const blocks = [];
  let paragraph = [];
  let listItems = [];
  let listType = null;

  const flushParagraph = (key) => {
    if (!paragraph.length) return;
    blocks.push(<p key={`p-${key}`}>{renderInline(paragraph.join(" "), `p-${key}`)}</p>);
    paragraph = [];
  };

  const resetList = (key) => {
    flushList(blocks, listItems, listType, key);
    listItems = [];
    listType = null;
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    const unordered = line.match(/^-\s+(.+)/);
    const ordered = line.match(/^\d+\.\s+(.+)/);

    if (!line) {
      flushParagraph(index);
      resetList(index);
      return;
    }

    if (line === "---") {
      flushParagraph(index);
      resetList(index);
      blocks.push(<hr key={`hr-${index}`} />);
      return;
    }

    if (line.startsWith("### ")) {
      flushParagraph(index);
      resetList(index);
      blocks.push(<h3 key={`h3-${index}`}>{renderInline(line.slice(4), `h3-${index}`)}</h3>);
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph(index);
      resetList(index);
      blocks.push(<h2 className="post-h2" key={`h2-${index}`}>{renderInline(line.slice(3), `h2-${index}`)}</h2>);
      return;
    }

    if (line.startsWith("> ")) {
      flushParagraph(index);
      resetList(index);
      blocks.push(<blockquote className="post-quote" key={`quote-${index}`}>{renderInline(line.slice(2), `quote-${index}`)}</blockquote>);
      return;
    }

    if (unordered || ordered) {
      flushParagraph(index);
      const nextType = ordered ? "ol" : "ul";
      if (listType && listType !== nextType) {
        resetList(index);
      }
      listType = nextType;
      listItems.push((ordered || unordered)[1]);
      return;
    }

    resetList(index);
    paragraph.push(line);
  });

  flushParagraph("last");
  resetList("last");

  return blocks;
}

export default function MarkdownContent({content}) {
  if (!content) {
    return null;
  }

  // Parser deliberadamente pequeño: soporta solo el Markdown editorial permitido
  // y renderiza nodos React, por lo que no acepta ni inyecta HTML crudo del autor.
  return <div className="markdown-content">{parseMarkdown(content)}</div>;
}
