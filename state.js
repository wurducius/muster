const main = {
  title: "Main",
  items: [
    { title: "Pascha", url: "https://eofol.com/pascha" },
    {
      title: "Yr",
      url: "https://www.yr.no/en",
    },
    { title: "Facebook", url: "https://facebook.com" },
    { title: "Youtube", url: "https://youtube.com" },
    { title: "Gmail", url: "https://gmail.com" },
    { title: "Idos", url: "https://idos.cz" },
    { title: "Translate", url: "https://translate.google.com/?sl=en&tl=cs&op=translate" },
    { title: "Novinky", url: "https://novinky.cz" },
  ],
}

const dev = {
  title: "Dev",
  items: [
    { title: "Github", url: "https://github.com/wurducius", dark: true },
    { title: "Npm", url: "https://npmjs.com" },
    { title: "Eofol6", url: "https://eofol.com/eofol6/" },
  ],
}

const update = {
  title: "Update",
  items: [
    { title: "Node JS", url: "https://nodejs.org/en/download" },
    { title: "Git for windows", url: "https://git-scm.com/downloads/win" },
  ],
}

const watch = {
  title: "Watch",
  items: [
    { title: "Watch Seinfeld", url: "https://watchseinfeld.net" },
    { title: "Top Cat", url: "https://www.wco.tv/anime/top-cat" },
    { title: "Ancient aliens", url: "https://watchancientaliensonline.blogspot.com" },
  ],
}

const office = {
  title: "Admin",
  items: [
    { title: "Vodafone", url: "https://www.vodafone.cz/muj/prihlaseni" },
    { title: "Trung Nguyen", url: "https://www.trungnguyen.cz/", noIcon: true },
  ],
}

const state = {
  data: {
    title: "Homepage",
    bookmarks: [main, dev, update, watch, office],
  },
  options: {
    showGroupTitles: false,
  },
  compilation: {},
}

module.exports = state
