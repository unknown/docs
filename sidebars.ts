import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Getting Started",
      items: [
        "index",
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Onboarding",
          items: [
            "onboarding/overview",
            "onboarding/account_creation",
            "onboarding/iam_role_creation",
            "onboarding/payment",
            "onboarding/company_info",
            "onboarding/join_org",
            "onboarding/csv",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Product",
      className: "section-title product",
      items: [
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Savings",
          items: [
            "product/savings/volume_discounts", 
            "product/savings/savings_plans", 
            "product/savings/reserved_instances",
            "product/savings/tax",
          ]},
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Guardrails",
          items: [
            "product/guardrails/anomalies", 
            "product/guardrails/rightsizing"
          ]
        },
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Visibility",
          items: [
            "product/visibility/dashboard",
            "product/visibility/budgets", 
          ]
        },
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Settings",
          items: [
            "product/settings/workspace",
            "product/settings/accounts",
            "product/settings/members",
            "product/settings/billing",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Security and Access Control",
      className: "section-title security",
      items: [
        "security/iam_roles_explained",
        "security/aws_permissions",
        "security/organization_changes",
        "security/iam_roles",
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Billing",
      items: ["billing/invoicing"],
      className: "section-title billing",
    },
    {
      "type": "category",
      "collapsed": false,
      "label": "FAQ",
      "items": ["faq/index"],
      "className": "section-title faq"
    }
    
  ],
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
