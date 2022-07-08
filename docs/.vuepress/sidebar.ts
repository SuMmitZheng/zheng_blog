import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/k8s/" : [
      {
        text: "概述",
        icon: "solid fa-home",
        link: "k8s-overview"
      },
      {
        text: "架构",
        icon: "solid fa-sitemap",
        prefix: "architecture/",
        collapsable: true,
        children: [
          "api-server.md"
        ],
      },
      {
        text: "资源",
        icon: "<solid fa-cubes",
        prefix: "resources/",
        collapsable: true,
        children: [
          {
            text: "工作负载",
            collapsable: true,
            prefix: "workloads/",
            children: [
              "deployment.md",
              "pod.md",
              "replicaset.md"
            ],
          },
          {
            text: "服务、网络",
            collapsable: true,
            prefix: "services/",
            children: [
              "service.md",
            ],
          }
        ],
      },
    ]
  }
);
