import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/k8s/" : [
      {
        text: "K8S",
        icon: "home",
        link: "k8s-overview"
      },
      {
        text: "架构",
        icon: "discover",
        prefix: "architecture/",
        children: [
          "api-server.md"
        ],
      },
      {
        text: "资源",
        icon: "discover",
        prefix: "resources/",
        children: [
          {
            text: "工作负载",
            icon: "discover",
            prefix: "workloads/",
            children: [
              "deployment.md",
              "pod.md",
              "replicaset.md"
            ],
          },
          {
            text: "服务、网络",
            icon: "discover",
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
