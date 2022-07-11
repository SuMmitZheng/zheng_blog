import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "home", link: "/" },

  { text: "Java",
    icon: "brands fa-java",
    link: "/java/java-overview.md"
    },

  { text: "Spring",
    icon: "solid fa-leaf",
    link: "/spring/spring-overview.md"
  },

  { text: "Docker",
    icon: "brands fa-docker",
    link: "/docker/docker-overview.md"
  },

  { text: "Kubernetes",
    icon: "solid fa-dharmachakra",
    link: "/k8s/k8s-overview.md"
  },

  { text: "中间件",
    icon: "fa-solid fa-database",
    prefix: "/middleware/",
    children: [
      {
        text: "mysql",
        icon: "fa-solid fa-database",
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
