const { a, em, strong } = require("hyperaxe");

const i18n = {
  en: {
    // navbar items
    extended: "Extended",
    extendedDescription: [
      "Posts from ",
      strong("people you don't follow"),
      ", sorted by recency. When you follow someone you may download messages from the people they follow, and those messages show up here.",
    ],
    popular: "Popular",
    popularDescription: [
      "Posts from people in your network, sorted by ",
      strong("hearts"),
      " in a given period. Hearts are counted from ",
      em("everyone"),
      ", including people you don't follow, so this shows posts from your friends that are popular in your extended network.",
    ],
    latest: "Latest",
    latestDescription:
      "Posts from yourself and people you follow, sorted by recency.",
    topics: "Topics",
    topicsDescription: [
      strong("Topics"),
      " from yourself and people you follow, sorted by recency. Select the timestamp of any post to see the rest of the thread.",
    ],
    summaries: "Summaries",
    summariesDescription: [
      strong("Topics and some comments"),
      " from yourself and people you follow, sorted by recency. Select the timestamp of any post to see the rest of the thread.",
    ],
    threads: "Threads",
    threadsDescription: [
      strong("Posts that have comments"),
      " from people you follow and your extended network, sorted by recency. Select the timestamp of any post to see the rest of the thread.",
    ],
    profile: "Profile",
    manualMode: "Manual Mode",
    mentions: "Mentions",
    mentionsDescription: [
      strong("Posts that mention you"),
      " from ",
      strong("anyone"),
      " sorted by recency. Sometimes people may forget to @mention you, and those posts won't show up here.",
    ],
    private: "Private",
    privateDescription: [
      "The latest comment from ",
      strong("private threads that include you"),
      ", sorted by recency. Private posts are encrypted for your public key, and have a maximum of 7 recipients. Recipients cannot be added after the thread has started. Select the timestamp to view the full thread.",
    ],
    search: "Search",
    imageSearch: "Image Search",
    settings: "Settings",
    // post actions
    comment: "Comment",
    subtopic: "Subtopic",
    json: "JSON",
    // relationships
    unfollow: "Unfollow",
    follow: "Follow",
    block: "Block",
    unblock: "Unblock",
    newerPosts: "Newer posts",
    olderPosts: "Older posts",
    feedRangeEmpty: "The given range is empty for this feed. Try viewing the ",
    seeFullFeed: "full feed",
    feedEmpty: "The local client has never seen posts from this account.",
    beginningOfFeed: "This is the beginning of the feed",
    noNewerPosts: "No newer posts have been received yet.",
    relationshipNotFollowing: "No one is following the other",
    relationshipTheyFollow: "They follow you",
    relationshipMutuals: "You are mutuals",
    relationshipFollowing: "You are following",
    relationshipYou: "This is you",
    relationshipBlocking: "You are blocking",
    relationshipNone: "You are neither following or blocking",
    relationshipConflict: "You are somehow both following and blocking",
    // author view
    viewLikes: "View likes",
    // likes view
    likedBy: "'s likes",
    // composer
    attachFiles: "Attach files",
    mentionsMatching: "Matching Mentions",
    preview: "Preview",
    publish: "Publish",
    contentWarningPlaceholder: "Optional content warning for this post",
    publishCustomDescription: [
      "Publish a custom message by entering ",
      a({ href: "https://en.wikipedia.org/wiki/JSON" }, "JSON"),
      " below. This may be useful for prototyping or publishing messages that Oasis doesn't support. This message cannot be edited or deleted.",
    ],
    commentWarning: [
      " Published comments cannot be edited or deleted. To respond to an individual message, select ",
      strong("subtopic"),
      " instead.",
    ],
    commentPublic: "public",
    commentPrivate: "private",
    commentLabel: ({ publicOrPrivate, markdownUrl }) => [
      "Write a ",
      strong(`${publicOrPrivate} comment`),
      " on this thread with ",
      a({ href: markdownUrl }, "Markdown"),
      ". Preview shows attached media.",
    ],
    publishLabel: ({ markdownUrl, linkTarget }) => [
      "Write a new public post in ",
      a(
        {
          href: markdownUrl,
          target: linkTarget,
        },
        "Markdown"
      ),
      ". Published posts cannot be edited or deleted. Preview to see attached media before publishing.",
    ],
    publishCustomInfo: ({ href }) => [
      "If you're an advanced user, you can also ",
      a({ href }, "publish a custom message"),
      ".",
    ],
    publishBasicInfo: ({ href }) => [
      "If you're not an advanced user, you should ",
      a({ href }, "publish a post"),
      ".",
    ],
    publishCustom: "Publish custom",

    subtopicLabel: ({ markdownUrl }) => [
      "Create a ",
      strong("public subtopic"),
      " of this message with ",
      a({ href: markdownUrl }, "Markdown"),
      ". Messages cannot be edited or deleted. To respond to an entire thread, select ",
      strong("comment"),
      " instead. Preview shows attached media.",
    ],
    // settings
    settingsIntro: ({ readmeUrl, version }) => [
      `You're using Oasis ${version}. Check out `,
      a({ href: readmeUrl }, "the readme"),
      ", configure your theme, or view debugging information below.",
    ],
    theme: "Theme",
    themeIntro:
      "Choose from any theme you'd like. The default theme is Atelier-SulphurPool-Light. You can also set your theme in the default configuration file.",
    setTheme: "Set theme",
    language: "Language",
    languageDescription:
      "If you'd like to use Oasis in another language, choose one below. Please be aware that this is very new and very basic. We'd love your help translating Oasis to other languages and locales.",
    setLanguage: "Set language",

    status: "Status",
    peerConnections: "Peer Connections ??????????????",
    connectionsIntro:
      "Your computer is syncing data with these other computers. It will connect to any scuttlebutt pub and peer it can find, even if you have no relationship with them, as it looks for data from your friends.",
    noConnections: "No peers connected.",
    connectionActionIntro:
      "You can decide when you want your computer to network with peers. You can start, stop, or restart your networking whenever you'd like.",
    startNetworking: "Start networking",
    stopNetworking: "Stop networking",
    restartNetworking: "Restart networking",
    sync: "Connect and Sync",
    indexes: "Indexes",
    indexesDescription:
      "Oasis keeps a cache of common calculations so that we can save time. Unfortunately this is a common source of bugs. Rebuilding your indexes is safe, and may fix some types of bugs.",
    invites: "Invites",
    invitesDescription:
      "Redeem an invite by pasting it below. If it works, you'll follow the feed and they'll follow you back.",
    acceptInvite: "Accept invite",
    // search page
    searchLabel: "Add word(s) to look for in downloaded messages.",
    // image search page
    imageSearchLabel: "Enter words to search for images labelled with them",
    // posts and comments
    commentDescription: ({ parentUrl }) => [
      " commented on ",
      a({ href: parentUrl }, " thread"),
    ],
    commentTitle: ({ authorName }) => [`Comment on @${authorName}'s message`],
    subtopicDescription: ({ parentUrl }) => [
      " created a subtopic from ",
      a({ href: parentUrl }, " a message"),
    ],
    subtopicTitle: ({ authorName }) => [`Subtopic on @${authorName}'s message`],
    mysteryDescription: "posted a mysterious message",
    // misc
    oasisDescription: "Friendly neighborhood scuttlebutt interface",
    submit: "Submit",
    editProfile: "Edit profile",
    editProfileDescription:
      "Edit your profile with Markdown. Old versions of your profile information still exist and can't be deleted, but most SSB apps don't show them.",
    profileName: "Profile name (plain text)",
    profileImage: "Profile image",
    profileDescription: "Profile description (Markdown)",
    hashtagDescription:
      "Posts from people in your network that reference this hashtag, sorted by recency.",
    rebuildName: "Rebuild database indexes",
  },
  /* spell-checker: disable */
  es: {
    latest: "Novedades",
    profile: "Mi Perfil",
    search: "Buscar",
    imageSearch: "Buscar fotos",
    settings: "Configuraci??n",
    // navbar items
    extended: "Red extendida",
    extendedDescription: [
      "Publicaciones de ",
      strong("personas que no sigues"),
      ", ordenadas por las m??s recientes. Quando sigas a una persona, podr??s descargar publicaciones de otras personas que ella sige, y esas publicaciones aparecer??n aqu??.",
    ],
    popular: "Populares",
    popularDescription: [
      "Publicaciones de personas de tu red, ordenadas por cantidad de ",
      strong("Me Gusta"),
      " en determinados periodos. Se cuentan los Me Gusta de ",
      em("todos"),
      ", incluidos aquellos que no sigues. Esta es una lista de las publicaciones m??s populares de tu red de contacto.",
    ],
    latestDescription:
      "Publicaciones de aquellos que sigues, ordenadas por las m??s recientes.",
    topics: "T??picos",
    topicsDescription: [
      strong("T??picos"),
      " de las personas que sigues, ordenados por los m??s recientes. Selecciona la hora de una publicaci??n para leer el hilo completo.",
    ],
    summaries: "Resumen",
    summariesDescription: [
      strong("T??picos y algunos comentarios"),
      " de las personas que sigues, ordenados por los m??s recientes. Selecciona la hora de una publicaci??n para leer el hilo completo.",
    ],
    threads: "Hilos",
    threadsDescription: [
      strong("Posts que tienen comentarios"),
      " de personas que sigues y de tu red extendida, ordenados por los m??s recientes. Selecciona la hora de una publicaci??n para leer el hilo completo.",
    ],
    manualMode: "Modo manual",
    mentions: "Menciones",
    mentionsDescription: [
      strong("Publicaciones de "),
      strong("cualquier persona"),
      " que te mencionan, ordenadas por las m??s recientes. Solo aparecen menciones en el formato @menci??n.",
    ],
    private: "Privado",
    privateDescription: [
      "Los comentarios m??s recientes de ",
      strong("hilos privados que te incluyen"),
      ". Las publicaciones privadas est??n cifradas para ti, y contienen un m??ximo de 7 destinatarios. No se podr??n adicionar nuevos destinarios despu??s que empieze el hilo. Selecciona la hora de una publicaci??n para leer el hilo completo.",
    ],
    // post actions
    comment: "Comentar",
    reply: "Responder",
    subtopic: "Subhilo",
    json: "JSON",
    // relationships
    unfollow: "Dejar de seguir",
    follow: "Seguir",
    relationshipNotFollowing: "Ustedes dos no se siguen",
    relationshipTheyFollow: "Ellos te siguen",
    relationshipMutuals: "Ustedes se siguen mutuamente",
    relationshipFollowing: "Siguiendo",
    relationshipYou: "T??",
    relationshipBlocking: "Bloqueado",
    relationshipNone: "No est??s siguiendo ni bloqueando",
    relationshipConflict: "De alguna forma lo est??s siguiendo y bloqueando",
    // author view
    viewLikes: "Ver Me Gusta",
    // likes view
    likedBy: "le gusta",
    // composer
    attachFiles: "Agregar archivos",
    mentionsMatching: "Menciones coincidentes",
    preview: "Vista previa",
    publish: "Publicar",
    contentWarningPlaceholder: "Advertencia opcional para esta publicaci??n",
    publishCustomDescription: [
      "Compone un mensaje avanzado usando ",
      a({ href: "https://en.wikipedia.org/wiki/JSON" }, "JSON"),
      ". Esto puede ser ??til para prototipar o componer tipos de mensaje que Oasis a??n no soporta. Este mensaje no podr?? ser editado o borrado.",
    ],
    commentWarning: [
      " Los mensajes no podr??n ser editados o borrados. Para responder a mensajes, selecciona ",
      strong("Responder"),
      ".",
    ],
    commentPublic: "p??blico",
    commentPrivate: "privado",
    commentLabel: ({ publicOrPrivate, markdownUrl }) => [
      "Escribe un ",
      strong(`${publicOrPrivate} comentario`),
      " con ",
      a({ href: markdownUrl }, "Markdown"),
      " en este hilo.",
    ],
    publishLabel: ({ markdownUrl, linkTarget }) => [
      "Escribe un mensaje p??blico con ",
      a(
        {
          href: markdownUrl,
          target: linkTarget,
        },
        "Markdown"
      ),
      ". Los mensajes no podr??n ser editados o borrados.",
    ],
    publishCustomInfo: ({ href }) => [
      "Si eres un usuario avanzado, puedes tambi??n ",
      a({ href }, "publicar un mensaje avanzado"),
      ".",
    ],
    publishBasicInfo: ({ href }) => [
      "Si no eres un usuario avanzado, lo mejor es ",
      a({ href }, "publicar un mensaje normal."),
      ".",
    ],
    publishCustom: "Publicar avanzado",

    replyLabel: ({ markdownUrl }) => [
      "Escribe una ",
      strong("respuesta p??blica"),
      " a este mensaje con ",
      a({ href: markdownUrl }, "Markdown"),
      ". Los mensajes no podr??n ser editados o borrados. Para responder a todo un hilo, selecciona ",
      strong("comentario"),
      ".",
    ],
    // settings
    settingsIntro: ({ readmeUrl, version }) => [
      `Est??s usando Oasis ${version}. Lee `,
      a({ href: readmeUrl }, "el Readme"),
      ", configura un tema, o consulta informaci??n de debug abajo.",
    ],
    theme: "Tema",
    themeIntro:
      "Elige un tema. Atelier-SulphurPool-Light es el tema por defecto.",
    setTheme: "Elige el tema",
    language: "Idioma",
    languageDescription:
      "Si queres usar Oasis en otro idioma, elige aqu??. Atenci??n, que esta funcionalidad es a??n nueva y b??sica. Necesitamos ayuda con traducciones para otros idiomas y formatos.",
    setLanguage: "Seleccionar idioma",

    status: "Estado",
    peerConnections: "Conexiones de pares ??????????????",
    connectionsIntro:
      "Tu computadora se est?? sincronizando con las siguientes computadoras. Se conectar?? con cualquier par de scuttlebutt que encuentre, a??n si no los conoce, ya que podr??an tener informaci??n de tus amigos.",
    noConnections: "Sin pares conectados.",
    connectionActionIntro:
      "Podr??s decidir cu??ndo conectar tu computadora a la red de pares. Podr??s iniciar, detener o reiniciar las conexiones siempre que quieras.",
    startNetworking: "Iniciar las conexiones",
    stopNetworking: "Detener las conexiones",
    restartNetworking: "Reiniciar las conexiones",
    indexes: "??ndices",
    indexesDescription:
      "Oasis mantiene una cach?? con datos precalculados para ahorrar tiempo. Lamentablemente, esto es a menudo una causa de errores. Reconstruir esta chach?? puede solucionar algunos errores si se presentan.",
    invites: "Invitaciones",
    invitesDescription:
      "Utiliza una invitaci??n aqu??. Si funciona, empezar??s a seguir a esa persona y ella te seguir?? a ti tambi??n.",
    acceptInvite: "Aceptar la invitaci??n",
    // search page
    searchLabel:
      "Busca con palabras clave entre las publicaciones que tienes descargadas.",
    // posts and comments
    commentDescription: ({ parentUrl }) => [
      " coment?? en el hilo ",
      a({ href: parentUrl }, ""),
    ],
    replyDescription: ({ parentUrl }) => [
      " respondido al ",
      a({ href: parentUrl }, "mensaje "),
    ],
    // image search page
    imageSearchLabel:
      "Busca con palabras clave entre los t??tulos de las fotos que tienes descargadas.",
    // posts and comments
    commentTitle: ({ authorName }) => [
      `Coment?? en el mensaje de @${authorName}`,
    ],
    subtopicDescription: ({ parentUrl }) => [
      " cre?? un nuevo hilo para ",
      a({ href: parentUrl }, "este mensaje"),
    ],
    subtopicTitle: ({ authorName }) => [
      `Nuevo hilo en el mensaje de @${authorName}`,
    ],
    mysteryDescription: "public?? un mensaje misterioso",
    // misc
    oasisDescription:
      "Una bonita interfaz para el amigable vecindario de scuttlebutt",
    submit: "Enviar",
    editProfile: "Editar perfil",
    editProfileDescription:
      "Edita tu perfil con Markdown. Los cambios ser??n publicados permanentemente, y habr?? un registro de cada cambio disponeble p??blicamente, aunque la mayor??a de las apps de scuttlebutt no muestran el historial.",
    profileName: "Nombre de perfil (texto)",
    profileImage: "Imagen de perfil",
    profileDescription: "Descripci??n de perfil (Markdown)",
    hashtagDescription:
      "Publicaciones de personas en tu red que mencionan este hashtag, ordenadas por las m??s recientes.",
    rebuildName: "Reconstruir ??ndices de la base de datos",
  },
  de: {
    extended: "Erweitert",
    extendedDescription: [
      "Beitr??ge von ",
      strong("Leuten denen du nicht folgst"),
      ", sortiert nach Aktualit??t. Wenn du jemandem folgst l??dst du eventuell auch Beitr??ge von Leuten herunter denen diese Person folgt, hier erscheinen diese Beitr??ge.",
    ],
    popular: "Beliebt",
    popularDescription: [
      "Beitr??ge von Leuten in deinem Netzwerk, sortiert nach ",
      strong("Herzen"),
      " in der angegebenen Periode. Herzen werden von ",
      em("jedem"),
      " gez??hlt, auch von Personen denen du nicht folgst. D.h. hier werden Beitr??ge von deinen Freund*innen angezeigt die in deinem erweiterten Netzwerk popul??r sind.",
    ],
    latest: "Aktuell",
    latestDescription:
      "Beitr??ge von Leuten denen du folgst, sortiert nach Aktualit??t.",
    topics: "Themen",
    topicsDescription: [
      strong("Themen"),
      " von Leuten denen du folgst, sortiert nach Aktualit??t. Klicke auf den Zeitstempel eines Beitrages um den Rest des Threads zu sehen.",
    ],
    summaries: "??bersicht",
    summariesDescription: [
      strong("Themen und einige Kommentare"),
      " von Leuten denen du folgst, sortiert nach Aktualit??t. Klicke auf den Zeitstempel eines Beitrages um den Rest des Threads zu sehen.",
    ],
    profile: "Profil",
    manualMode: "Manueller Modus",
    mentions: "Erw??hnungen",
    mentionsDescription: [
      strong("Beitr??ge in denen du erw??hnt wirst"),
      " von ",
      strong("allen"),
      ", sortiert nach Aktualit??t. Manchmal vergessen Leute dich zu @erw??hnen, diese Beitr??ge werden hier nicht erscheinen.",
    ],
    private: "Privat",
    privateDescription: [
      "Die letzten Kommentare aus ",
      strong("privaten Threads die dich beinhalten"),
      ", sortiert nach Aktualit??t. Private Beitr??ge werden mit deinem ??ffentlichen Schl??ssel verschl??sselt und haben maximal 7 Empf??nger*innen. Empf??nger*innen k??nnen nicht hinzugef??gt werden nachdem ein Thread gestartet wurde. Klicke auf den Zeitst??mpel um einen komplette Thread anzuzeigen.",
    ],
    search: "Suche",
    settings: "Einstellungen",
    // post actions
    comment: "Kommentieren",
    reply: "Antworten",
    json: "JSON",
    // relationships
    unfollow: "Entfolgen",
    follow: "Folgen",
    relationshipNotFollowing: "No one is following the other",
    relationshipTheyFollow: "They follow you",
    relationshipMutuals: "You are mutuals",
    relationshipFollowing: "Du folgst",
    relationshipYou: "Das bist du",
    relationshipBlocking: "Du blockierst",
    relationshipNone: "Weder folgst noch blockst du",
    relationshipConflict: "Irgendwie folgst und blockst du gleichzeitig",
    // author view
    viewLikes: "Likes ansehen",
    // likes view
    likedBy: "'s Likes",
    // composer
    attachFiles: "Datei Hinzuf??gen",
    mentionsMatching: "Matching Mentions",
    preview: "Vorschau",
    publish: "Ver??ffentlichen",
    contentWarningPlaceholder: "Optionale Inhaltswarnung f??r diesen Beitrag",
    publishCustomDescription: [
      "Ver??ffentliche eine benutzerdefinierte Nachricht durch das Eingeben von ",
      a({ href: "https://en.wikipedia.org/wiki/JSON" }, "JSON"),
      " unten. Dies kann zum Prototyping oder dem ver??ffentlichen von Nachrichten die Oasis nicht unterst??tzt n??tzlich sein. Diese Nachricht kann nicht bearbeitet oder gel??scht werden.",
    ],
    commentWarning: [
      " Nachrichten k??nnen nicht bearbeitet oder gel??scht werden. Um auf eine einzelne Nachricht zu antworten, w??hle ",
      strong("antworten"),
      " stattdessen.",
    ],
    commentPublic: "??ffentlichen",
    commentPrivate: "privaten",
    commentLabel: ({ publicOrPrivate, markdownUrl }) => [
      "Verfasse einen ",
      strong(`${publicOrPrivate} Kommentar`),
      " in diesem Thread mit ",
      a({ href: markdownUrl }, "Markdown"),
      ".",
    ],
    publishLabel: ({ markdownUrl, linkTarget }) => [
      "Verfasse einen neuen ??ffentlichen Beitrag in ",
      a(
        {
          href: markdownUrl,
          target: linkTarget,
        },
        "Markdown"
      ),
      ". Beitr??ge k??nnen nicht bearbeitet oder gel??scht werden.",
    ],
    publishCustomInfo: ({ href }) => [
      "Wenn du ein erfahrener Benutzer bist kannst du auch ",
      a({ href }, "eine benutzerdefinierte Nachricht ver??ffentlichen"),
      ".",
    ],
    publishBasicInfo: ({ href }) => [
      "Wenn du kein erfahrener Benutzer bist, solltest du ",
      a({ href }, "einen einfachen Beitrag ver??ffentlichen"),
      ".",
    ],
    publishCustom: "Benutzerdefinierte Ver??ffentlichung",
    replyLabel: ({ markdownUrl }) => [
      "Verfasse eine ",
      strong("??ffentliche Antwort"),
      " zu dieser Nachricht mit ",
      a({ href: markdownUrl }, "Markdown"),
      ". Nachrichten k??nnen nicht bearbeitet oder gel??scht werden. Um auf einen kompletten Thread zu antworten, klicke auf ",
      strong("kommentieren"),
      " stattdessen.",
    ],
    // settings
    settingsIntro: ({ readmeUrl, version }) => [
      `Du verwendest Oasis ${version}. Lese `,
      a({ href: readmeUrl }, "die Readme"),
      ", konfiguriere dein Theme oder schaue dir Debugging-Informationen weiter unten an.",
    ],
    theme: "Theme",
    themeIntro:
      "W??hle ein Theme das dir gef??llt. Das Standard-Theme ist Atelier-SulphurPool-Light.",
    setTheme: "Theme einstellen",
    language: "Sprache",
    languageDescription:
      "Wenn du Oasis in einer anderen Sprache nutzen m??chtest, w??hle unten eine aus. Bitte beachte, dass dies sehr neu und noch am Anfang ist. Wir freuen uns ??ber deine Hilfe bei der ??bersetzung von Oasis in andere Sprachen.",
    setLanguage: "Sprache einstellen",
    status: "Status",
    peerConnections: "Verbindungen zu Peers ??????????????",
    connectionsIntro:
      "Dein Computer synchronisiert Daten mit diesen anderen Computern. Auf der Suche nach Daten von deinen Freund*innen werden Verbindungen zu allen Scuttlebutt Pubs und Peers aufgenommen die gefunden werden, auch wenn du keine Beziehung mit diesen hast.",
    noConnections: "Keine Peers verbunden.",
    connectionActionIntro:
      "Du kannst entscheiden wann dein Computer mit Peers netzwerken soll. Du kannst das Netzwerken starten, stoppen oder neustarten wann immer du willst.",
    startNetworking: "Netzwerken starten",
    stopNetworking: "Netzwerken stoppen",
    restartNetworking: "Netzwerken neustarten",
    indexes: "Indizes",
    invites: "Einladungen",
    invitesDescription:
      "L??se eine Einladung durch einf??gen unten ein. Wenn es geklappt hat wirst du dem Feed folgen und sie werden dir folgen.",
    acceptInvite: "Einladung annehmen",
    // search page
    searchLabel:
      "F??ge W??rte hinzu nach denen in heruntergeladenen Nachrichten gesucht werden soll.",
    // posts and comments
    commentDescription: ({ parentUrl }) => [
      " kommentierte auf ",
      a({ href: parentUrl }, " Thread"),
    ],
    replyDescription: ({ parentUrl }) => [
      " antwortete auf ",
      a({ href: parentUrl }, " Nachricht"),
    ],
    mysteryDescription: "ver??ffentlichte eine mysteri??se Nachricht",
    // misc
    oasisDescription: "Freundliches Scuttlebutt Interface",
    submit: "Abschicken",
    editProfile: "Profil bearbeiten",
    editProfileDescription:
      "Bearbeite dein Profil mit Markdown. Nachrichten k??nnen nicht bearbeitet oder gel??scht werden. Alte Versionen deiner Profilinformationen bleiben existieren und sind ??ffentliche Informationen, aber die meisten SSB-Apps zeigen diese nicht an.",
    profileName: "Profilname (Text)",
    profileDescription: "Profilbeschreibung (Markdown)",
    hashtagDescription:
      "Beitr??ge von Leuten in deinem Netzwerk die dieses Hashtag referenzieren, sortiert nach Aktualit??t.",
  },
  it: {
    // navbar items
    extended: "Rete estesa",
    extendedDescription: [
      "Cronologia dei post scritti da  ",
      strong("persone che non segui"),
      ". Quando segui qualcuno potresti scaricare post pubblicati da persone a te estranee ma seguite da loro, e questi messaggi compariranno qui.",
    ],
    popular: "In evidenza",
    popularDescription: [
      "Posts dalle persone nel tuo network, ordinati per ",
      strong("like"),
      " in un dato periodo. I like vengono contati tra i post di ",
      em("chiunque"),
      ", incluse le persone che non segui, quindi qui vedrai i post dei tuoi amici che sono pi?? popolari nella tua rete estesa.",
    ],
    latest: "Novit??",
    latestDescription:
      "Post scritti da te e dalle persone che segui, ordinati per data.",
    topics: "Argomenti",
    topicsDescription: [
      strong("Argomenti"),
      " scritti da te e dalle persone che segui, ordinati per data. Seleziona il timestamp di un post per visualizzarne il thread.",
    ],
    summaries: "Riassunti",
    summariesDescription: [
      strong("Argomenti e qualche commento"),
      " scritto da te e dalle persone che segui, in ordine cronologico. Clicca il timestamp di un post per visualizzarne il thread.",
    ],
    threads: "Thread",
    threadsDescription: [
      strong("Posts che hanno commenti"),
      " scritti da persone che segui e dalla tua rete estesa, ordinati cronologicamente. from people you follow and your extended network, sorted by recency. Clicca il timestamp di un post per visualizzarne il thread.",
    ],
    profile: "Profilo",
    manualMode: "Modalit?? manuale",
    mentions: "Menzioni",
    mentionsDescription: [
      strong("Post che ti menzionano,"),
      " scritti da ",
      strong("chiunque"),
      ", ordinati cronologicamente. A volte le persone dimenticano di @menzionarti, in quel caso i loro post non verranno mostrati qui.",
    ],
    private: "Privato",
    privateDescription: [
      "Gli ultimi commenti su ",
      strong("thread privati di cui fai parte"),
      ", ordinati cronologicamente. I post privati sono crittati con la tua chiave pubblica, e possono avere un massimo di 7 destinatari. Non ?? possibile aggiungere destinatari una volta che il thread ?? iniziato. Clicca il timestamp di un post per visualizzarne il thread.",
    ],
    search: "Cerca",
    settings: "Impostazioni",
    // post actions
    comment: "Commenta",
    reply: "Rispondi",
    json: "JSON",
    // relationships
    unfollow: "Non seguire pi??",
    follow: "Segui",
    relationshipNotFollowing: "No one is following the other",
    relationshipTheyFollow: "They follow you",
    relationshipMutuals: "You are mutuals",
    relationshipFollowing: "Stai seguendo",
    relationshipYou: "Sei tu",
    relationshipBlocking: "Stai bloccando",
    relationshipNone: "Non stai n?? seguendo n?? bloccando",
    relationshipConflict:
      "In qualche modo non meglio precisato stai seguendo e bloccando allo stesso tempo",
    // author view
    viewLikes: "Visualizza like",
    // likes view
    likedBy: "Like di ", // here the subject of the sentence should be put at the end (as if it were "liked by X" instead of "X's likes"
    // composer
    attachFiles: "Aggiungere i file",
    mentionsMatching: "Menzioni corrispondenti",
    preview: "Visualizza l'anteprima",
    publish: "Pubblica",
    contentWarningPlaceholder:
      "Avviso su possibili contenuti per adulti nel post, opzionale",
    publishCustomDescription: [
      "Pubblica un messaggio su misura inserendo dati ",
      a({ href: "https://en.wikipedia.org/wiki/JSON" }, "JSON"),
      " qui sotto. Torna utile per realizzare prototipi o per pubblicare post ancora non supportati da Oasis.  Questo messaggio non potr?? essere modificato n?? rimosso.",
    ],
    commentWarning: [
      " I commenti non possono essere modificati n?? rimossi. Per rispondere ad un messaggio, seleziona ",
      strong("rispondi"),
      " invece.",
    ],
    commentPublic: "pubblico",
    commentPrivate: "privato",
    commentLabel: ({ publicOrPrivate, markdownUrl }) => [
      "Scrivi un ",
      strong(`${publicOrPrivate} commento`),
      " su questo thread con ",
      a({ href: markdownUrl }, "Markdown"),
      ".",
    ],
    publishLabel: ({ markdownUrl, linkTarget }) => [
      "Scrivi un post pubblico in ",
      a(
        {
          href: markdownUrl,
          target: linkTarget,
        },
        "Markdown"
      ),
      ". I post non possono essere modificati n?? rimossi.",
    ],
    publishCustomInfo: ({ href }) => [
      "Se sei uno smanettone puoi anche ",
      a({ href }, "pubblicare un messaggio su misura"),
      ".",
    ],
    publishBasicInfo: ({ href }) => [
      "Se non sei uno smanettone ti consigliamo di ",
      a({ href }, "pubblicare un post"),
      ".",
    ],
    publishCustom: "Pubblica su misuram",

    replyLabel: ({ markdownUrl }) => [
      "Scrivi una ",
      strong("risposta pubblica"),
      " a questo messaggio con ",
      a({ href: markdownUrl }, "Markdown"),
      ". I messaggi non possono essere modificati n?? rimossi. Per rispondere ad un intero thread seleziona ",
      strong("commenta"),
      " invece.",
    ],
    // settings
    settingsIntro: ({ readmeUrl, version }) => [
      `Stai usando Oasis ${version}. Dai un'occhiata al `,
      a({ href: readmeUrl }, "file readme"),
      ", configura il tuo tema o leggi i log di debugging qui sotto.",
    ],
    theme: "Tema",
    themeIntro:
      "Scegli il tema che pi?? ti piace. Il tema predefinito si chiama Atelier-SulphurPool-Light. Puoi anche selezionare il tuo tema nel file di configurazione.",
    setTheme: "Set theme",
    language: "Lingua",
    languageDescription:
      "Se vuoi utilizzare Oasis in un'altra lingua, puoi sceglierla qui sotto. Attenzione, ?? una nuova funzionalit?? e la traduzione potrebbe non essere perfetta. Se parli una lingua straniera ci piacerebbe che ci aiutassi a tradurre Oasis in altre lingue.",
    setLanguage: "Seleziona lingua",

    status: "Stato attuale",
    peerConnections: "Connessioni coi peer ??????????????",
    connectionsIntro:
      "Il tuo computer sincronizza i dati con questi computer e si connetter?? a qualsiasi pub o utente scuttlebutt con cui riesce ad entrare in contatto. Dato che preleva dati dalla tua cerchia di amici, potresti vedere dati scritti da utenti che non conosci.",
    noConnections: "Nessun peer connesso.",
    connectionActionIntro:
      "Puoi decidere se vuoi che il tuo computer entri in contatto con peer connessi alla stessa intranet in cui ti trovi ora. Puoi far partire, fermare o far ripartire questo tipo di connessioni quando vuoi.",
    startNetworking: "Inizia networking locale",
    stopNetworking: "Ferma networking locale",
    restartNetworking: "Ricarica networking locale",
    indexes: "Indici",
    invites: "Inviti",
    invitesDescription:
      "Utilizza un invito che hai ricevuto incollandolo qui sotto. Se viene accettato ne seguirai il feed e ne riceverai il follow.",
    acceptInvite: "Accetta l'invito",
    // search page
    searchLabel: "Cerca tra i messaggi che hai scaricato.",
    // posts and comments
    commentDescription: ({ parentUrl }) => [
      " ha commentato il ",
      a({ href: parentUrl }, " thread"),
    ],
    replyDescription: ({ parentUrl }) => [
      " ha risposto al  ",
      a({ href: parentUrl }, " messaggio "),
    ],
    mysteryDescription: "ha postato un messaggio misterioso",
    // misc
    oasisDescription: "Interfaccia per scuttlebutt facile da usare",
    submit: "Vai",
    editProfile: "Modifica profilo",
    editProfileDescription:
      "Modifica il tuo profilo usando Markdown. Le versioni precedenti del tuo profilo continueranno ad esistere e non possono essere eliminate, ma la maggior parte dei client per SSB non le mostreranno.",
    profileName: "Nome profilo (testo non formattato)",
    profileImage: "Immagine di profilo",
    profileDescription: "Descrizione del profilo (Markdown)",
    hashtagDescription:
      "Post da persone nella tua rete che menzionano questo hashtag, ordinati cronologicamente.",
  },
  fr: {
    // navbar items
    extended: "??tendue",
    extendedDescription: [
      "Messages de ",
      strong("quelqu'un que vous ne suivez pas"),
      ", tri??es anciennet??. Lorsque vous suivez quelqu'un, vous pouvez t??l??charger les messages des personnes qu'il suit, et ces messages apparaissent ici.",
    ],
    popular: "Populaire",
    popularDescription: [
      "Messages des personnes de votre r??seau, tri??s par ",
      strong("votes"),
      " dans une p??riode donn??e. Les votes sont compt??s ?? partir de ",
      em("tous"),
      ", y compris les personnes que vous ne suivez pas, donc cela montre les messages de vos amis qui sont populaires dans votre r??seau ??tendu.",
    ],
    latest: "Derni??res nouvelles",
    latestDescription:
      "Les messages de vous-m??me et des personnes que vous suivez, tri??s par anciennet??.",
    topics: "Sujets",
    topicsDescription: [
      strong("Sujets"),
      " de vous-m??me et des personnes que vous suivez, class??s par anciennet??. S??lectionnez l'horodatage de n'importe quel message pour voir le reste du fil de discussion.",
    ],
    summaries: "R??sum??s",
    summariesDescription: [
      strong("Sujets et commentaires"),
      " de vous-m??me et des personnes que vous suivez, class??s par anciennet??. S??lectionnez l'horodatage de n'importe quel message pour voir le reste du fil de discussion.",
    ],
    threads: "Fils de discussion",
    threadsDescription: [
      strong("Messages avec commentaires"),
      " des personnes que vous suivez et de votre r??seau ??tendu, class??s par anciennet??. S??lectionnez l'horodatage de n'importe quel message pour voir le reste du fil de discussion.",
    ],
    profile: "Profil",
    manualMode: "Mode Manuel",
    mentions: "Mentions",
    mentionsDescription: [
      strong("Postes qui vous mentionnent"),
      " from ",
      strong("n'importe qui"),
      " tri??es par anciennet??. Parfois, les gens peuvent oublier de vous @mentionner, et ces messages n'appara??tront pas ici.",
    ],
    private: "Priv??",
    privateDescription: [
      "Le dernier commentaire de ",
      strong("des fils de discussion priv??s qui vous incluent"),
      ", tri??es par anciennet??. Les messages priv??s sont crypt??s par cl?? publique, et ont un maximum de 7 destinataires. Les destinataires ne peuvent pas ??tre ajout??s apr??s le d??marrage du fil de discussion. S??lectionnez l'horodatage pour voir le fil de discussion complet.",
    ],
    search: "Rechercher",
    settings: "Param??tres",
    // post actions
    comment: "Commentaire",
    reply: "R??ponse",
    json: "JSON",
    // relationships
    unfollow: "Ne plus suivre",
    follow: "Suivre",
    block: "Bloquer",
    unblock: "D??bloquer",
    relationshipNotFollowing: "No one is following the other",
    relationshipTheyFollow: "Il/elle te suivent",
    relationshipMutuals: "Vous ??tes des mutuellements",
    relationshipFollowing: "Vous suivez",
    relationshipYou: "C'est vous",
    relationshipBlocking: "Vous bloquez",
    relationshipNone: "Vous ne suivez ni ne bloquez",
    relationshipConflict:
      "D'une certaine mani??re, vous suivez et bloquez ?? la fois",
    // author view
    viewLikes: "Voir les votes",
    // likes view
    likedBy: "a vot??",
    // composer
    attachFiles: "Ajouter des fichiers",
    mentionsMatching: "Matching Mentions",
    preview: "Examiner",
    publish: "Publier",
    contentWarningPlaceholder:
      "Avertissement de contenu facultatif pour ce poste",
    publishCustomDescription: [
      "Publier un message personnalis?? en entrant ",
      a({ href: "https://en.wikipedia.org/wiki/JSON" }, "JSON"),
      " ci-dessous. Cela peut ??tre utile pour le prototypage ou la publication de messages qu'Oasis ne prend pas en charge. Ce message ne peut pas ??tre modifi?? ou supprim??.",
    ],
    commentWarning: [
      " Les commentaires ne peuvent ??tre ni modifi??s ni supprim??s. Pour r??pondre ?? un message individuel, s??lectionnez ",
      strong("r??pondre"),
      " ?? la place.",
    ],
    commentPublic: "public",
    commentPrivate: "priv??",
    commentLabel: ({ publicOrPrivate, markdownUrl }) => [
      "Ecrire un ",
      strong(`${publicOrPrivate} commentaire`),
      " sur ce fil avec ",
      a({ href: markdownUrl }, "Markdown"),
      ".",
    ],
    publishLabel: ({ markdownUrl, linkTarget }) => [
      "R??diger un nouveau poste public dans ",
      a(
        {
          href: markdownUrl,
          target: linkTarget,
        },
        "Markdown"
      ),
      ". Les messages ne peuvent ??tre ni modifi??s ni supprim??s.",
    ],
    publishCustomInfo: ({ href }) => [
      "Si vous ??tes un utilisateur avanc??, vous pouvez ??galement ",
      a({ href }, "publier un message personnalis??"),
      ".",
    ],
    publishBasicInfo: ({ href }) => [
      "Si vous n'??tes pas un utilisateur avanc??, vous devez ",
      a({ href }, "publier un message"),
      ".",
    ],
    publishCustom: "Publier un type particulier",

    replyLabel: ({ markdownUrl }) => [
      "Ecrire un ",
      strong("r??ponse publique"),
      " ?? ce message avec ",
      a({ href: markdownUrl }, "Markdown"),
      ". Les messages ne peuvent ??tre ni modifi??s ni supprim??s. Pour r??pondre ?? un fil de discussion entier, s??lectionnez ",
      strong("commentaire"),
      " en remplacement.",
    ],
    // settings
    settingsIntro: ({ readmeUrl, version }) => [
      `Vous utilisez Oasis ${version}. Consultez `,
      a({ href: readmeUrl }, "le lisez-moi"),
      ", configurez votre th??me, ou consultez les informations de d??bogage ci-dessous.",
    ],
    theme: "Th??me",
    themeIntro:
      "Choisissez le th??me que vous souhaitez. Le th??me par d??faut est Atelier-SulphurPool-Light. Vous pouvez ??galement d??finir votre th??me dans le fichier de configuration par d??faut.",
    setTheme: "Choisir th??me",
    language: "Langue",
    languageDescription:
      "Si vous souhaitez utiliser Oasis dans une autre langue, choisissez l'une des langues ci-dessous. Sachez qu'il s'agit d'une langue tr??s nouvelle et tr??s basique. Nous aimerions que vous nous aidiez ?? traduire Oasis dans d'autres langues et d'autres lieux.",
    setLanguage: "Choisir la langue",

    status: "Status",
    peerConnections: "Connexions pair ?? pair ??????????????",
    connectionsIntro:
      "Votre ordinateur synchronise les donn??es avec ces autres ordinateurs. Il se connecte ?? n'importe quel pub de ragots et peer-to-peer qu'il peut trouver, m??me si vous n'avez pas de relation avec eux, en cherchant des donn??es de vos amis.",
    noConnections: "Aucun pair n'est connect??.",
    connectionActionIntro:
      "Vous pouvez d??cider quand vous voulez que votre ordinateur soit en r??seau avec vos pairs. Vous pouvez d??marrer, arr??ter ou red??marrer votre r??seau quand vous le souhaitez.",
    startNetworking: "Activer le r??seau",
    stopNetworking: "D??sactiver le r??seau",
    restartNetworking: "Red??marrer le r??seau",
    indexes: "Index",
    invites: "Invitations",
    invitesDescription:
      "Utilisez une invitation en la collant ci-dessous. Si cela fonctionne, vous suivrez le flux et ils vous suivront en retour.",
    acceptInvite: "Accepter l'invitation",
    // search page
    searchLabel:
      "Ajouter un ou plusieurs mots ?? rechercher dans les messages t??l??charg??s.",
    // posts and comments
    commentDescription: ({ parentUrl }) => [
      " a comment?? ",
      a({ href: parentUrl }, " fil de discussion"),
    ],
    replyDescription: ({ parentUrl }) => [
      " a r??pondu ?? ",
      a({ href: parentUrl }, " message"),
    ],
    mysteryDescription: "a post?? un message myst??rieux",
    // misc
    oasisDescription: "Une interface conviviale pour des bavardages entre amis",
    submit: "Soumettre",
    editProfile: "Modifier le profil",
    editProfileDescription:
      "Modifiez votre profil en Markdown. Les anciennes versions des informations de votre profil existent toujours et ne peuvent pas ??tre supprim??es, mais la plupart des applications SSB ne les affichent pas.",
    profileName: "Nom du profil (texte en clair)",
    profileImage: "Image du profil",
    profileDescription: "Description du profil (Markdown)",
    hashtagDescription:
      "Les messages des personnes de votre r??seau qui font r??f??rence ?? ce hashtag, tri??s par ordre de r??cence.",
  },
};

module.exports = i18n;
