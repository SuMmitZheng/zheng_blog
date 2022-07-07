import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "home", link: "/" },

  { text: "Spring",
    icon: "java",
    link: "/spring/spring-overview.md"
  },

  { text: "Docker",
    icon: "note",
    link: "/docker/docker-overview.md"
  },

  { text: "K8S",
    icon: "note",
    link: "/k8s/k8s-overview.md"
  },

  { text: "中间件",
    icon: "mysql",
    prefix: "/middleware/",
    children: [
      {
        text: "mysql",
        icon: "mysql",
        link: "mysql/mysql-overview.md"
      },
      {
        text: "redis",
        icon: "redis",
        link: "redis/redis-overview.md"
      }
    ]
  },
]);
