export default {
  widgets: [
    {
      name: "document-list",
      options: {
        title: "Latest Articles",
        order: "_updatedAt desc",
        types: ["blog"],
        showCreateButton: true,
        createButtonText: "Create new",
      },
      layout: {
        width: "medium",
        height: "small",
      },
    },
    {
      name: "document-list",
      options: {
        title: "Photo Albums",
        order: "_updatedAt desc",
        types: ["photoBlog"],
        showCreateButton: true,
        createButtonText: "Create new",
      },
      layout: {
        width: "medium",
        height: "small",
      },
    },
    {
      name: "document-list",
      options: {
        title: "New Comments",
        order: "_updatedAt desc",
        types: ["comments"],
        showCreateButton: false,
      },
      layout: {
        width: "small",
        height: "small",
      },
    },

    {
      name: "document-list",
      options: {
        title: "Products",
        order: "_updatedAt desc",
        types: ["shop"],
        showCreateButton: true,
        createButtonText: "Add new",
      },
      layout: {
        width: "large",
        height: "small",
      },
    },

    {
      name: "document-list",
      options: {
        title: "Newsletter",
        order: "_updatedAt desc",
        types: ["newsletter"],
        showCreateButton: false,
      },
      layout: {
        width: "medium",
        height: "small",
      },
    },
  ],
};
