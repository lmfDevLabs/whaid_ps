/* ==========================================================================
   Whaid site — shared JS (nav, theme, i18n, reveal, wa-chat animation)
   ========================================================================== */

// ---------- i18n ----------
const DICT = {
  es: {
    nav_home: 'Home',
    nav_blog: 'Blog',
    nav_product: 'Producto',
    nav_use_cases: 'Casos de uso',
    nav_pricing: 'Precio',
    nav_cta: 'Agendar demo',

    hero_eyebrow: 'Asistente IA para tus visitantes',
    hero_title_a: 'Descubre todo lo que hay ',
    hero_title_b: 'a tu alrededor',
    hero_title_c: ' hablando por WhatsApp.',
    hero_sub: 'Whaid ayuda a los visitantes de eventos, recintos, ferias, centros comerciales y universidades a descubrir información pública relevante: espacios, productos, actividades, promociones, compañías y oportunidades disponibles.',
    hero_cta_primary: 'Agendar demo',
    hero_cta_secondary: 'Ver cómo funciona',

    keyshots_title_a: 'Pregúntale al lugar ',
    keyshots_title_b: 'como le escribirías a una persona',
    keyshots_title_c: '.',
    keyshots_sub: 'Whaid convierte la información pública de un recinto o evento en una experiencia conversacional sencilla para sus visitantes.',

    k1_title: 'Búsqueda en lenguaje natural',
    k1_body: 'El visitante pregunta como habla: “¿Dónde encuentro productos sostenibles?”, “¿Qué actividades hay hoy?” o “¿Qué marcas están cerca?”. Whaid interpreta la intención y busca en la información disponible.',
    k2_title: 'Información pública del lugar',
    k2_body: 'Whaid trabaja sobre colecciones de información pública: espacios, eventos, productos, promociones, compañías, servicios y puntos de interés que el visitante necesita conocer.',
    k3_title: 'Respuestas útiles y contextuales',
    k3_body: 'La respuesta no es una lista fría. Whaid puede explicar opciones, relacionar resultados, orientar por ubicación, destacar horarios y mostrar alternativas relevantes para el visitante.',
    k4_title: 'Vista enriquecida',
    k4_body: 'Cuando la respuesta necesita más que texto, Whaid puede entregar una vista visual con tarjetas, enlaces, imágenes, ubicaciones y datos clave de las opciones encontradas.',

    security_badge: 'Información pública, acceso controlado',
    security_title: 'Seguridad desde el primer dato',
    security_subtitle: 'Whaid está diseñado para operar con acceso controlado a la información de cada cliente. Solo se hace visible al público la información que el espacio decide publicar y que puede ser consultada por visitantes, usuarios o interesados.',
    security_text: 'La infraestructura cloud utilizada por Whaid aporta una capa robusta de seguridad para proteger los datos frente a accesos no autorizados, pérdida de información o intentos de robo. Desde la arquitectura hasta la consulta final por WhatsApp, el sistema diferencia entre datos internos, datos operativos y datos públicos.',
    security_card_public_title: 'Datos públicos controlados',
    security_card_public_text: 'Whaid solo expone la información que el cliente define como pública y consultable.',
    security_card_access_title: 'Acceso restringido',
    security_card_access_text: 'La información operativa o interna no queda disponible para visitantes ni consultas abiertas.',
    security_card_cloud_title: 'Infraestructura cloud segura',
    security_card_cloud_text: 'El entorno cloud aporta protección, aislamiento y servicios especializados para resguardar la operación.',
    security_card_traceability_title: 'Trazabilidad y administración',
    security_card_traceability_text: 'La información puede organizarse y mantenerse desde fuentes controladas, reduciendo exposición innecesaria.',

    usecases_title_a: 'Hecho para lugares ',
    usecases_title_b: 'con mucho por descubrir',
    usecases_title_c: '.',
    usecases_sub: 'Whaid es útil donde hay mucha información pública, muchas opciones y visitantes que necesitan orientación rápida.',

    uc1_label: 'Shows y ferias',
    uc1_title: 'Ayuda a los visitantes a encontrar expositores, productos y actividades.',
    uc1_body: 'En una feria, Whaid permite preguntar por marcas, stands, categorías, promociones, charlas o recorridos sin depender de mapas estáticos o listados difíciles de explorar.',
    uc1_stat_a: 'más descubrimiento de expositores y oportunidades dentro del evento',

    uc2_label: 'Centros comerciales',
    uc2_title: 'Convierte el centro comercial en una experiencia conversacional.',
    uc2_body: 'Los visitantes pueden preguntar por tiendas, servicios, promociones, restaurantes, eventos o lugares cercanos dentro del centro comercial usando lenguaje natural.',
    uc2_stat_a: 'mejor orientación para visitantes y compradores',

    uc3_label: 'Universidades',
    uc3_title: 'Facilita el acceso a información pública del campus.',
    uc3_body: 'Estudiantes, visitantes y comunidad pueden consultar espacios, eventos, servicios, oficinas, actividades y puntos de interés sin navegar múltiples páginas o carteleras.',
    uc3_stat_a: 'menos fricción para encontrar información institucional útil',

    other_possibilities_title: 'Otras posibilidades con Whaid',
    other_possibilities_subtitle: 'El mismo modelo conversacional puede adaptarse a escenarios donde la información no solo está en un lugar, sino también en sus activos, propiedades, productos y ubicaciones internas.',
    other_possibilities_intro: 'El mismo modelo conversacional puede adaptarse a escenarios donde la información no solo está en un lugar, sino también en sus activos, propiedades, productos y ubicaciones internas. Whaid puede convertirse en una capa de consulta para negocios que necesitan hacer visible lo que tienen disponible, dónde está y cómo puede ser encontrado por una persona en el momento preciso.',
    other_possibilities_real_estate_title: 'Inmobiliarias',
    other_possibilities_real_estate_description: 'Una inmobiliaria podría permitir que sus visitantes pregunten por propiedades disponibles según ubicación, presupuesto, área, número de habitaciones, tipo de inmueble o disponibilidad comercial.',
    other_possibilities_real_estate_video_title: 'Video sobre posibilidades de Whaid para inmobiliarias',
    other_possibilities_real_estate_prompt_1: '¿Qué apartamentos disponibles hay cerca de Chapinero?',
    other_possibilities_real_estate_prompt_2: 'Busco una oficina pequeña con parqueadero.',
    other_possibilities_real_estate_prompt_3: '¿Qué propiedades tienen terraza y más de dos habitaciones?',
    other_possibilities_inventory_title: 'Inventarios ubicados',
    other_possibilities_inventory_description: 'Whaid también puede ayudar a consultar inventarios que existen físicamente en un lugar: productos, referencias, unidades, ubicaciones internas, disponibilidad o características relevantes para encontrarlos mejor.',
    other_possibilities_inventory_video_title: 'Video sobre posibilidades de Whaid para inventarios ubicados',
    other_possibilities_inventory_prompt_1: '¿Dónde está la referencia PZP-5?',
    other_possibilities_inventory_prompt_2: '¿Hay unidades disponibles de este producto?',
    other_possibilities_inventory_prompt_3: '¿Qué productos similares están en esta zona?',
    other_possibilities_closing: 'No se trata de reemplazar los sistemas que ya existen, sino de crear una forma más natural de consultar la información que un negocio ya tiene.',
    other_possibilities_cta: '¿Tu negocio tiene información que las personas deberían poder preguntar?',
    other_possibilities_button: 'Exploremos una posibilidad',


    pricing_eyebrow: 'Modelo de precio',
    pricing_title: 'Precio flexible según demanda',
    pricing_subtitle: 'Whaid se renta como un sistema desplegado para cada cliente. El valor mensual depende del consumo real de los servicios tecnológicos asociados, más un 20% por mantenimiento, operación y administración técnica.',
    pricing_formula_monthly: 'Precio mensual =',
    pricing_formula_consumption: 'consumo de servicios asociados',
    pricing_formula_maintenance: '20% de mantenimiento',
    pricing_provider_label: 'Servicio asociado',
    pricing_services_label: 'Servicios usados',
    pricing_metric_label: 'Métrica de cobro',
    pricing_closing_eyebrow: 'Transparente y escalable',
    pricing_closing_title: 'Un modelo transparente y escalable',
    pricing_closing_text: 'Whaid no cobra una tarifa única desconectada del uso real. Cada implementación paga los servicios que consume y suma un 20% por la operación técnica del sistema. Esto permite iniciar con una escala controlada y crecer progresivamente según la demanda del espacio.',
    pricing_cta: 'Solicitar estimación',

    pricing_gcp_name: 'Google Cloud Platform',
    pricing_gcp_description: 'Ejecuta y aloja la infraestructura base de Whaid: backend, almacenamiento, base de datos, hosting y manejo seguro de credenciales.',
    pricing_gcp_service_1: 'Secret Manager',
    pricing_gcp_service_2: 'Cloud Run',
    pricing_gcp_service_3: 'Cloud Storage',
    pricing_gcp_service_4: 'Firestore',
    pricing_gcp_service_5: 'App Hosting',
    pricing_gcp_metric: 'Requests, CPU, memoria, almacenamiento, lecturas/escrituras y transferencia.',
    pricing_gcp_demand: 'Crece según la cantidad de usuarios, conversaciones, documentos consultados, archivos alojados y tráfico del sitio.',

    pricing_openai_name: 'OpenAI',
    pricing_openai_description: 'Permite convertir contenido en vectores semánticos y generar respuestas naturales para los visitantes.',
    pricing_openai_service_1: 'Embeddings',
    pricing_openai_service_2: 'Text generation',
    pricing_openai_metric: 'Tokens procesados por modelos de embeddings y generación de texto.',
    pricing_openai_demand: 'Crece según la cantidad de documentos indexados, preguntas recibidas, longitud del contexto y respuestas generadas.',

    pricing_pinecone_name: 'Pinecone',
    pricing_pinecone_description: 'Almacena y consulta los vectores que permiten encontrar información por significado, no solo por coincidencia exacta.',
    pricing_pinecone_service_1: 'Vector database',
    pricing_pinecone_service_2: 'Semantic search',
    pricing_pinecone_service_3: 'Retrieval para RAG',
    pricing_pinecone_metric: 'Read units, write units y almacenamiento vectorial.',
    pricing_pinecone_demand: 'Crece según la cantidad de búsquedas semánticas, documentos indexados y volumen de información disponible.',

    pricing_algolia_name: 'Algolia',
    pricing_algolia_description: 'Permite búsquedas rápidas y precisas cuando el visitante pregunta por nombres, referencias, marcas, códigos o datos puntuales.',
    pricing_algolia_service_1: 'Exact search',
    pricing_algolia_service_2: 'Indexación de registros',
    pricing_algolia_service_3: 'Búsqueda por palabras clave, referencias, códigos o nombres',
    pricing_algolia_metric: 'Records indexados y search requests.',
    pricing_algolia_demand: 'Crece según la cantidad de registros consultables y el volumen de búsquedas realizadas por los visitantes.',

    pricing_firecms_name: 'FireCMS',
    pricing_firecms_description: 'Facilita la administración de los datos que Whaid puede consultar: productos, lugares, eventos, servicios, documentos o registros.',
    pricing_firecms_service_1: 'Panel de administración de contenidos',
    pricing_firecms_service_2: 'Gestión de colecciones',
    pricing_firecms_service_3: 'Edición de información pública del espacio',
    pricing_firecms_metric: 'Plan, licenciamiento o modalidad de despliegue.',
    pricing_firecms_demand: 'Depende del tipo de instalación, el nivel de administración requerido y la modalidad self-hosted o cloud que se defina.',

    pricing_langsmith_name: 'LangSmith',
    pricing_langsmith_description: 'Permite observar, depurar y evaluar el comportamiento del agente para mejorar calidad, trazabilidad y confiabilidad.',
    pricing_langsmith_service_1: 'Observabilidad',
    pricing_langsmith_service_2: 'Trazas',
    pricing_langsmith_service_3: 'Evaluación y debugging de flujos IA',
    pricing_langsmith_metric: 'Traces, retención y asientos del equipo.',
    pricing_langsmith_demand: 'Crece según la cantidad de interacciones monitoreadas, pruebas realizadas y tiempo de retención de las trazas.',

    form_eyebrow: '15 minutos, sin compromiso',
    form_title: '¿Listo para probar Whaid en tu recinto o evento?',
    form_sub: 'Agenda una demo con nuestro equipo. Te mostramos cómo Whaid puede convertir la información pública de tu espacio en una experiencia conversacional para visitantes.',
    form_name: 'Nombre',
    form_last: 'Apellido',
    form_email: 'Correo corporativo',
    form_company: 'Empresa',
    form_role: 'Rol',
    form_size: 'Tamaño del equipo',
    form_submit: 'Agendar demo',
    form_disclaimer: 'No enviamos spam. Solo te contactamos para coordinar la demo.',

    assets_eyebrow: 'Tipos de información',
    assets_title_a: 'Muchas colecciones, ',
    assets_title_b: 'una sola conversación',
    assets_title_c: '.',
    assets_sub: 'Whaid puede responder sobre distintos tipos de información pública disponible en un lugar, evento o recinto.',
    a1: 'Recintos',
    a2: 'Eventos',
    a3: 'Espacios',
    a4: 'Compañías',
    a5: 'Personas públicas',
    a6: 'Productos',
    a7: 'Actividades',
    a8: 'Promociones',

    nav_pitch: 'Pitch',
    pitch_eyebrow: 'Pitch · 90 segundos',
    pitch_title: 'Whaid en menos de lo que dura un café.',
    pitch_sub: 'Mira cómo Whaid ayuda a un visitante a encontrar opciones relevantes dentro de un evento usando lenguaje natural.',
    pitch_caption: 'Reproducir pitch oficial',

    panel_eyebrow: 'Vista visual · Opciones encontradas',
    panel_title: '3 marcas · 1 promoción',
    panel_row_a14: 'EcoTela · Pabellón 2',
    panel_row_b04: 'VerdeWear · Stand B-14',
    panel_row_b05: 'Andes Fibers · Zona Diseño',

    takelook_eyebrow: 'Take a look',
    takelook_title_a: 'Un vistazo a ',
    takelook_title_b: 'Whaid ayudando a un visitante',
    takelook_title_c: '.',
    takelook_sub: 'Así se ve una conversación entre una persona que visita un evento y Whaid: preguntas naturales, respuestas útiles y opciones relevantes.',

    footer_tagline: 'El asistente IA que ayuda a descubrir lo que hay dentro de un lugar — desde WhatsApp.',
    footer_product: 'Producto',
    footer_company: 'Compañía',
    footer_legal: 'Legal',
    footer_pricing: 'Pricing',
    footer_security: 'Seguridad',
    footer_contact: 'Contacto',
    footer_copy: '© 2026 Whaid. Hecho con cuidado en LatAm.',

    blog_eyebrow: 'Journal',
    blog_title_a: 'Ideas sobre IA, lugares y ',
    blog_title_b: 'descubrimiento',
    blog_title_c: '.',
    blog_sub: 'Ensayos, casos de estudio y notas técnicas del equipo de Whaid.',
    read_more: 'Leer más',
    read_post: 'Leer post',
    featured: 'Destacado',
    back_to_blog: '← Volver al blog',
    min_read: 'min de lectura',
    share: 'Compartir',
    more_posts: 'Más lecturas',
    toc: 'En este artículo',
  },

  en: {
    nav_home: 'Home',
    nav_blog: 'Blog',
    nav_product: 'Product',
    nav_use_cases: 'Use cases',
    nav_pricing: 'Pricing',
    nav_cta: 'Book a demo',

    hero_eyebrow: 'AI assistant for your visitors',
    hero_title_a: 'Discover everything ',
    hero_title_b: 'around you',
    hero_title_c: ' by chatting on WhatsApp.',
    hero_sub: 'Whaid helps visitors at events, venues, fairs, shopping centers and universities discover relevant public information: spaces, products, activities, promotions, companies and available opportunities.',
    hero_cta_primary: 'Book a demo',
    hero_cta_secondary: 'See how it works',

    keyshots_title_a: 'Ask the place ',
    keyshots_title_b: 'like you would text a person',
    keyshots_title_c: '.',
    keyshots_sub: 'Whaid turns public information from a venue or event into a simple conversational experience for visitors.',

    k1_title: 'Natural-language search',
    k1_body: 'Visitors ask the way they speak: “Where can I find sustainable products?”, “What activities are happening today?” or “Which brands are nearby?”. Whaid understands the intent and searches the available information.',
    k2_title: 'Public information from the place',
    k2_body: 'Whaid works with public information collections: spaces, events, products, promotions, companies, services and points of interest visitors need to know.',
    k3_title: 'Useful contextual answers',
    k3_body: 'The answer is not just a cold list. Whaid can explain options, connect results, guide by location, highlight schedules and show relevant alternatives for the visitor.',
    k4_title: 'Enriched view',
    k4_body: 'When an answer needs more than text, Whaid can provide a visual view with cards, links, images, locations and key details from the options found.',

    security_badge: 'Public information, controlled access',
    security_title: 'Security from the first data point',
    security_subtitle: 'Whaid is designed to operate with controlled access to each client’s information. Only the information that the space decides to make public can be viewed and queried by visitors, users or interested audiences.',
    security_text: 'The cloud infrastructure used by Whaid provides a strong security layer to protect data against unauthorized access, information loss or theft attempts. From the architecture to the final WhatsApp query, the system distinguishes between internal data, operational data and public information.',
    security_card_public_title: 'Controlled public data',
    security_card_public_text: 'Whaid only exposes the information that the client defines as public and queryable.',
    security_card_access_title: 'Restricted access',
    security_card_access_text: 'Operational or internal information is not available to visitors or open queries.',
    security_card_cloud_title: 'Secure cloud infrastructure',
    security_card_cloud_text: 'The cloud environment provides protection, isolation and specialized services to safeguard the operation.',
    security_card_traceability_title: 'Traceability and administration',
    security_card_traceability_text: 'Information can be organized and maintained from controlled sources, reducing unnecessary exposure.',

    usecases_title_a: 'Built for places ',
    usecases_title_b: 'with a lot to discover',
    usecases_title_c: '.',
    usecases_sub: 'Whaid is useful wherever there is a lot of public information, many options and visitors who need fast guidance.',

    uc1_label: 'Shows & fairs',
    uc1_title: 'Help visitors find exhibitors, products and activities.',
    uc1_body: 'At a fair, Whaid lets visitors ask about brands, booths, categories, promotions, talks or routes without relying on static maps or hard-to-browse lists.',
    uc1_stat_a: 'more discovery of exhibitors and opportunities inside the event',

    uc2_label: 'Shopping centers',
    uc2_title: 'Turn the shopping center into a conversational experience.',
    uc2_body: 'Visitors can ask about stores, services, promotions, restaurants, events or nearby places inside the mall using natural language.',
    uc2_stat_a: 'better guidance for visitors and shoppers',

    uc3_label: 'Universities',
    uc3_title: 'Make public campus information easier to access.',
    uc3_body: 'Students, visitors and the community can ask about spaces, events, services, offices, activities and points of interest without browsing multiple pages or notice boards.',
    uc3_stat_a: 'less friction when finding useful institutional information',

    other_possibilities_title: 'Other possibilities with Whaid',
    other_possibilities_subtitle: 'The same conversational model can adapt to scenarios where information is not only tied to a place, but also to its assets, properties, products and internal locations.',
    other_possibilities_intro: 'The same conversational model can adapt to scenarios where information is not only tied to a place, but also to its assets, properties, products and internal locations. Whaid can become a query layer for businesses that need to make visible what they have available, where it is, and how a person can find it at the right moment.',
    other_possibilities_real_estate_title: 'Real estate',
    other_possibilities_real_estate_description: 'A real estate business could allow visitors to ask about available properties by location, budget, area, number of rooms, property type or commercial availability.',
    other_possibilities_real_estate_video_title: 'Video about Whaid possibilities for real estate',
    other_possibilities_real_estate_prompt_1: 'Which available apartments are near Chapinero?',
    other_possibilities_real_estate_prompt_2: 'I’m looking for a small office with parking.',
    other_possibilities_real_estate_prompt_3: 'Which properties have a terrace and more than two bedrooms?',
    other_possibilities_inventory_title: 'Located inventories',
    other_possibilities_inventory_description: 'Whaid can also help query inventories that physically exist in a place: products, references, units, internal locations, availability or relevant attributes that make them easier to find.',
    other_possibilities_inventory_video_title: 'Video about Whaid possibilities for located inventories',
    other_possibilities_inventory_prompt_1: 'Where is reference PZP-5?',
    other_possibilities_inventory_prompt_2: 'Are there available units of this product?',
    other_possibilities_inventory_prompt_3: 'Which similar products are in this area?',
    other_possibilities_closing: 'It is not about replacing existing systems, but about creating a more natural way to query the information a business already has.',
    other_possibilities_cta: 'Does your business have information people should be able to ask about?',
    other_possibilities_button: 'Explore a possibility',


    pricing_eyebrow: 'Pricing model',
    pricing_title: 'Flexible pricing based on demand',
    pricing_subtitle: 'Whaid is rented as a system deployed for each client. The monthly value depends on the real consumption of the associated technology services, plus 20% for maintenance, operation and technical administration.',
    pricing_formula_monthly: 'Monthly price =',
    pricing_formula_consumption: 'associated service consumption',
    pricing_formula_maintenance: '20% maintenance',
    pricing_provider_label: 'Associated service',
    pricing_services_label: 'Services used',
    pricing_metric_label: 'Billing metric',
    pricing_closing_eyebrow: 'Transparent and scalable',
    pricing_closing_title: 'A transparent and scalable model',
    pricing_closing_text: 'Whaid does not charge a fixed fee disconnected from real usage. Each implementation pays for the services it consumes and adds 20% for the technical operation of the system. This makes it possible to start at a controlled scale and grow progressively according to the demand of each space.',
    pricing_cta: 'Request an estimate',

    pricing_gcp_name: 'Google Cloud Platform',
    pricing_gcp_description: 'Runs and hosts Whaid’s base infrastructure: backend, storage, database, hosting and secure credential management.',
    pricing_gcp_service_1: 'Secret Manager',
    pricing_gcp_service_2: 'Cloud Run',
    pricing_gcp_service_3: 'Cloud Storage',
    pricing_gcp_service_4: 'Firestore',
    pricing_gcp_service_5: 'App Hosting',
    pricing_gcp_metric: 'Requests, CPU, memory, storage, reads/writes and transfer.',
    pricing_gcp_demand: 'Scales with users, conversations, consulted documents, hosted files and site traffic.',

    pricing_openai_name: 'OpenAI',
    pricing_openai_description: 'Turns content into semantic vectors and generates natural answers for visitors.',
    pricing_openai_service_1: 'Embeddings',
    pricing_openai_service_2: 'Text generation',
    pricing_openai_metric: 'Tokens processed by embedding and text-generation models.',
    pricing_openai_demand: 'Scales with indexed documents, incoming questions, context length and generated answers.',

    pricing_pinecone_name: 'Pinecone',
    pricing_pinecone_description: 'Stores and queries vectors so Whaid can find information by meaning, not only by exact matches.',
    pricing_pinecone_service_1: 'Vector database',
    pricing_pinecone_service_2: 'Semantic search',
    pricing_pinecone_service_3: 'Retrieval for RAG',
    pricing_pinecone_metric: 'Read units, write units and vector storage.',
    pricing_pinecone_demand: 'Scales with semantic searches, indexed documents and the volume of available information.',

    pricing_algolia_name: 'Algolia',
    pricing_algolia_description: 'Enables fast, precise searches when visitors ask for names, references, brands, codes or specific data.',
    pricing_algolia_service_1: 'Exact search',
    pricing_algolia_service_2: 'Record indexing',
    pricing_algolia_service_3: 'Keyword, reference, code or name search',
    pricing_algolia_metric: 'Indexed records and search requests.',
    pricing_algolia_demand: 'Scales with the number of searchable records and the volume of searches visitors perform.',

    pricing_firecms_name: 'FireCMS',
    pricing_firecms_description: 'Makes it easier to manage the data Whaid can consult: products, places, events, services, documents or records.',
    pricing_firecms_service_1: 'Content administration panel',
    pricing_firecms_service_2: 'Collection management',
    pricing_firecms_service_3: 'Editing public information for the space',
    pricing_firecms_metric: 'Plan, licensing or deployment modality.',
    pricing_firecms_demand: 'Depends on the installation type, required administration level and the self-hosted or cloud modality that is defined.',

    pricing_langsmith_name: 'LangSmith',
    pricing_langsmith_description: 'Observes, debugs and evaluates agent behavior to improve quality, traceability and reliability.',
    pricing_langsmith_service_1: 'Observability',
    pricing_langsmith_service_2: 'Traces',
    pricing_langsmith_service_3: 'AI flow evaluation and debugging',
    pricing_langsmith_metric: 'Traces, retention and team seats.',
    pricing_langsmith_demand: 'Scales with monitored interactions, tests performed and trace retention time.',

    form_eyebrow: '15 minutes, no strings',
    form_title: 'Ready to try Whaid in your venue or event?',
    form_sub: 'Book a demo with our team. We’ll show you how Whaid can turn the public information of your place into a conversational experience for visitors.',
    form_name: 'First name',
    form_last: 'Last name',
    form_email: 'Work email',
    form_company: 'Company',
    form_role: 'Role',
    form_size: 'Team size',
    form_submit: 'Book a demo',
    form_disclaimer: 'No spam. We only reach out to schedule the demo.',

    assets_eyebrow: 'Information types',
    assets_title_a: 'Many collections, ',
    assets_title_b: 'one conversation',
    assets_title_c: '.',
    assets_sub: 'Whaid can answer questions about different types of public information available in a place, event or venue.',
    a1: 'Venues',
    a2: 'Events',
    a3: 'Spaces',
    a4: 'Companies',
    a5: 'Public people',
    a6: 'Products',
    a7: 'Activities',
    a8: 'Promotions',

    nav_pitch: 'Pitch',
    pitch_eyebrow: 'Pitch · 90 seconds',
    pitch_title: 'Whaid in less time than a coffee break.',
    pitch_sub: 'Watch how Whaid helps a visitor find relevant options inside an event using natural language.',
    pitch_caption: 'Play official pitch',

    panel_eyebrow: 'View · Options found',
    panel_title: '3 brands · 1 promotion',
    panel_row_a14: 'EcoTela · Pavilion 2',
    panel_row_b04: 'VerdeWear · Booth B-14',
    panel_row_b05: 'Andes Fibers · Design Zone',

    takelook_eyebrow: 'Take a look',
    takelook_title_a: 'A glimpse of ',
    takelook_title_b: 'Whaid helping a visitor',
    takelook_title_c: '.',
    takelook_sub: 'Here’s what a conversation between an event visitor and Whaid looks like: natural questions, useful answers and relevant options.',

    footer_tagline: 'The AI assistant that helps people discover what is inside a place — from WhatsApp.',
    footer_product: 'Product',
    footer_company: 'Company',
    footer_legal: 'Legal',
    footer_pricing: 'Pricing',
    footer_security: 'Security',
    footer_contact: 'Contact',
    footer_copy: '© 2026 Whaid. Made with care in LatAm.',

    blog_eyebrow: 'Journal',
    blog_title_a: 'Notes on AI, places and ',
    blog_title_b: 'discovery',
    blog_title_c: '.',
    blog_sub: 'Essays, case studies and technical notes from the Whaid team.',
    read_more: 'Read more',
    read_post: 'Read post',
    featured: 'Featured',
    back_to_blog: '← Back to blog',
    min_read: 'min read',
    share: 'Share',
    more_posts: 'More reading',
    toc: 'In this article',
  },
};

const QA_STRIP = {
  es: {
    qaStrip: {
      label: 'Imagina responderle a tus visitantes preguntas como:',
      tabs: [
        { id: 'events', label: 'Ferias y eventos', items: [
          { question: '¿Dónde encuentro proveedores de paneles solares?', answer: 'Whaid puede mostrarte compañías relacionadas con energía solar, su ubicación dentro del evento y una breve descripción de lo que ofrecen.' },
          { question: '¿A qué hora empieza la charla principal?', answer: 'La charla principal comienza a las 4:00 p. m. en el auditorio central. También puedo indicarte cómo llegar desde tu ubicación actual.' },
          { question: '¿Qué empresas ofrecen soluciones para restaurantes?', answer: 'Encontré varias compañías con servicios para restaurantes, incluyendo marketing, software de punto de venta y mobiliario comercial.' },
          { question: '¿Dónde está el stand de una marca específica?', answer: 'Puedo ayudarte a ubicar el stand, mostrarte el pabellón correspondiente y darte señales para llegar dentro del recinto.' },
          { question: '¿Qué actividades hay hoy en el evento?', answer: 'Puedo listar las actividades del día, sus horarios, espacios y los expositores relacionados.' }
        ]},
        { id: 'malls', label: 'Centros comerciales', items: [
          { question: '¿Dónde queda la plazoleta de comidas?', answer: 'La plazoleta de comidas está en el segundo nivel. Puedo indicarte la ruta más cercana y sugerirte opciones según lo que quieras comer.' },
          { question: '¿Qué promociones hay hoy en ropa?', answer: 'Encontré promociones activas en varias tiendas de moda. Puedo mostrarte cuáles están vigentes y en qué locales aplican.' },
          { question: '¿Dónde puedo comprar un regalo para el Día de la Madre?', answer: 'Puedo sugerirte tiendas de accesorios, moda, belleza o tecnología según tu presupuesto y el tipo de regalo que buscas.' },
          { question: '¿Hay parqueadero disponible?', answer: 'Puedo indicarte zonas de parqueadero, accesos principales y la información disponible sobre disponibilidad o tarifas.' },
          { question: '¿Qué tiendas venden productos deportivos?', answer: 'Encontré tiendas deportivas dentro del centro comercial y puedo mostrarte su ubicación, horarios y categorías principales.' }
        ]},
        { id: 'universities', label: 'Universidades', items: [
          { question: '¿Dónde queda el laboratorio de prototipado?', answer: 'Puedo indicarte el edificio, piso y ruta aproximada hacia el laboratorio, además de los horarios o requisitos disponibles.' },
          { question: '¿Qué eventos académicos hay esta semana?', answer: 'Puedo mostrarte eventos, charlas, conferencias y actividades programadas dentro del campus.' },
          { question: '¿Dónde puedo pedir información sobre admisiones?', answer: 'Puedo ubicarte la oficina correspondiente, horarios de atención y canales oficiales de contacto.' },
          { question: '¿Qué espacios puedo reservar para estudiar?', answer: 'Puedo ayudarte a encontrar salas, bibliotecas o espacios colaborativos disponibles según la información del campus.' },
          { question: '¿Quién puede orientarme sobre un programa académico?', answer: 'Puedo mostrarte dependencias, contactos o áreas relacionadas con el programa que estás buscando.' }
        ]}
      ]
    }
  },
  en: {
    qaStrip: {
      label: 'Imagine answering your visitors questions like:',
      tabs: [
        { id: 'events', label: 'Fairs and events', items: [
          { question: 'Where can I find solar panel providers?', answer: 'Whaid can show companies related to solar energy, their location inside the event, and a short description of what they offer.' },
          { question: 'What time does the main talk start?', answer: 'The main talk starts at 4:00 p.m. in the central auditorium. I can also guide you there from your current location.' },
          { question: 'Which companies offer solutions for restaurants?', answer: 'I found several companies with services for restaurants, including marketing, point-of-sale software, and commercial furniture.' },
          { question: 'Where is a specific brand’s booth?', answer: 'I can help you locate the booth, show the corresponding pavilion, and give you directions inside the venue.' },
          { question: 'What activities are happening today?', answer: 'I can list today’s activities, schedules, spaces, and related exhibitors.' }
        ]},
        { id: 'malls', label: 'Shopping centers', items: [
          { question: 'Where is the food court?', answer: 'The food court is on the second level. I can show you the closest route and suggest options based on what you want to eat.' },
          { question: 'What clothing promotions are available today?', answer: 'I found active promotions in several fashion stores. I can show you which ones are available and where they apply.' },
          { question: 'Where can I buy a Mother’s Day gift?', answer: 'I can suggest accessory, fashion, beauty, or technology stores based on your budget and the type of gift you are looking for.' },
          { question: 'Is parking available?', answer: 'I can show you parking areas, main access points, and available information about rates or availability.' },
          { question: 'Which stores sell sports products?', answer: 'I found sports stores inside the shopping center and can show their location, opening hours, and main categories.' }
        ]},
        { id: 'universities', label: 'Universities', items: [
          { question: 'Where is the prototyping lab?', answer: 'I can show you the building, floor, and approximate route to the lab, along with available hours or access requirements.' },
          { question: 'What academic events are happening this week?', answer: 'I can show events, talks, conferences, and activities scheduled across campus.' },
          { question: 'Where can I ask for admissions information?', answer: 'I can locate the right office, opening hours, and official contact channels.' },
          { question: 'What spaces can I reserve for studying?', answer: 'I can help you find study rooms, libraries, or collaborative spaces based on the campus information available.' },
          { question: 'Who can guide me about an academic program?', answer: 'I can show departments, contacts, or areas related to the program you are looking for.' }
        ]}
      ]
    }
  }
};

window.WHAID_SITE = QA_STRIP;

function getLang() {
  return localStorage.getItem('whaid:lang') || 'es';
}
function setLang(l) {
  localStorage.setItem('whaid:lang', l);
  document.documentElement.setAttribute('data-lang', l);
  applyI18n();
}
function t(key) {
  const l = getLang();
  return (DICT[l] && DICT[l][key]) || (DICT.es[key] || key);
}
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
  });
  // Update lang-switch button label
  const ls = document.getElementById('lang-switch');
  if (ls) ls.textContent = getLang() === 'es' ? 'EN' : 'ES';
}

// ---------- theme ----------
function getTheme() {
  return localStorage.getItem('whaid:theme') || 'light';
}
function setTheme(t) {
  localStorage.setItem('whaid:theme', t);
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('theme-switch');
  if (btn) btn.setAttribute('aria-label', t === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

// ---------- init early ----------
(function initEarly() {
  document.documentElement.setAttribute('data-theme', getTheme());
  document.documentElement.setAttribute('data-lang', getLang());
})();

// ---------- reveal on scroll ----------
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ---------- nav wiring ----------
function wireChrome() {
  const ls = document.getElementById('lang-switch');
  if (ls) ls.addEventListener('click', () => setLang(getLang() === 'es' ? 'en' : 'es'));
  const ts = document.getElementById('theme-switch');
  if (ts) ts.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  const menuBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open);
    });
  }
  // Scroll state on nav
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 10) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
}

function initSite() {
  applyI18n();
  wireChrome();
  initReveal();
  if (typeof initWAChat === 'function') initWAChat();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
