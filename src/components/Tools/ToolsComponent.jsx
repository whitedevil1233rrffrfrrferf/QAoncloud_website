import ToolsSection from "./ToolsSection";

export default function ToolsComponent() {
  const BugTrackingTools = [
    {
      logo: "/images/tools_we_use/bug_tracking_tools/airtable.png",
      name: "Airtable",
    },
    {
      logo: "/images/tools_we_use/bug_tracking_tools/jira.png",
      name: "Jira",
    },
    {
      logo: "/images/tools_we_use/bug_tracking_tools/linear.png",
      name: "Linear",
    },
    {
      logo: "/images/tools_we_use/bug_tracking_tools/mantis.png",
      name: "mantis",
    },
    {
      logo: "/images/tools_we_use/bug_tracking_tools/phabricator.png",
      name: "phabricator",
    },
    {
      logo: "/images/tools_we_use/bug_tracking_tools/asana.png",
      name: "asana",
    },
    {
      logo: "/images/tools_we_use/bug_tracking_tools/bug.png",
      name: "Bugzilla",
    },
    {
      logo: "/images/tools_we_use/bug_tracking_tools/sheets.png",
      name: "sheets",
    },
    {
      logo: "/images/tools_we_use/bug_tracking_tools/Trello.png",
      name: "Trello",
    },
  ];
  const DeveloperTools = [
    {
      logo: "/images/tools_we_use/developer_tools/eclipse.png",
      name: "Trello",
    },
    {
      logo: "/images/tools_we_use/developer_tools/Jenkins.png",
      name: "Jenkins",
    },
    {
      logo: "/images/tools_we_use/developer_tools/Android_studio.png",
      name: "Android Studio",
    },
    {
      logo: "/images/tools_we_use/developer_tools/fabric.png",
      name: "Fabric",
    },
  ];
  const TeamColabTools = [
    {
      logo: "/images/tools_we_use/team_collaboration_tools/slack.png",
      name: "Slack",
    },
    {
      logo: "/images/tools_we_use/team_collaboration_tools/Zoom.png",
      name: "Zoom",
    },
    {
      logo: "/images/tools_we_use/team_collaboration_tools/basecamp.png",
      name: "Base Camp",
    },
    {
      logo: "/images/tools_we_use/team_collaboration_tools/meet.png",
      name: "Google Meet",
    },
    {
      logo: "/images/tools_we_use/team_collaboration_tools/mattermost.png",
      name: "Mattermost",
    },
    {
      logo: "/images/tools_we_use/team_collaboration_tools/Whatsapp.png",
      name: "Whatsapp",
    },
    {
      logo: "/images/tools_we_use/team_collaboration_tools/notion.png",
      name: "Notion",
    },
    {
      logo: "/images/tools_we_use/team_collaboration_tools/Ms.png",
      name: "Microsoft Teams",
    },
    {
      logo: "/images/tools_we_use/team_collaboration_tools/trello.png",
      name: "Trello",
    },
  ];
  const CRM = [
    {
      logo: "/images/tools_we_use/CRM/salesforce.png",
      name: "Sales force",
    },
  ];
  const CMS = [
    {
      logo: "/images/tools_we_use/CMS/django.png",
      name: "Django",
    },
    {
      logo: "/images/tools_we_use/CMS/ex.png",
      name: "Expression Engine",
    },
  ];
  const Test_management = [
    {
      logo: "/images/tools_we_use/test_management/zephyr.png",
      name: "Zephyr",
    },
    {
      logo: "/images/tools_we_use/test_management/HP-Quality center.png",
      name: "HP",
    },
  ];
  const MobileTools = [
    {
      logo: "/images/tools_we_use/mobile_testing/BlueStacks.png",
      name: "BlueStacks",
    },
    {
      logo: "/images/tools_we_use/mobile_testing/appium.png",
      name: "Appium",
    },
    {
      logo: "/images/tools_we_use/mobile_testing/ttf.png",
      name: "TTF",
    },
    {
      logo: "/images/tools_we_use/mobile_testing/crashlytics.png",
      name: "Crashlytics",
    },
    {
      logo: "/images/tools_we_use/mobile_testing/charles.png",
      name: "Charles",
    },
  ];
  const TestAutomation = [
    {
      logo: "/images/tools_we_use/test_automation/selenium.png",
      name: "Selenium",
    },
    {
      logo: "/images/tools_we_use/test_automation/appium.png",
      name: "Appium",
    },
    {
      logo: "/images/tools_we_use/test_automation/Jmeter.png",
      name: "JMeter",
    },
    {
      logo: "/images/tools_we_use/test_automation/cypress.png",
      name: "Cypress",
    },
    {
      logo: "/images/tools_we_use/test_automation/HP.png",
      name: "HP",
    },
    {
      logo: "/images/tools_we_use/test_automation/TestProject.png",
      name: "TestProject",
    },
  ];
  const TestCase_management = [
    {
      logo: "/images/tools_we_use/testcase_management/TestRail.png",
      name: "Test Rail",
    },
    {
      logo: "/images/tools_we_use/testcase_management/Jira.png",
      name: "Jira",
    },
    {
      logo: "/images/tools_we_use/testcase_management/AirTable.png",
      name: "Air Table",
    },
    {
      logo: "/images/tools_we_use/testcase_management/Sheets.png",
      name: "Google Sheets",
    },
  ];
  const Others = [
    {
      logo: "/images/tools_we_use/others/Mobizen.png",
      name: "Test Rail",
    },
  ];
  const SecurityTestingTools = [
    {
      logo: "/images/tools_we_use/security_testing/BS.png",
      name: "BlueStacks",
    },
    {
      logo: "/images/tools_we_use/security_testing/openvas.png",
      name: "Appium",
    },
    {
      logo: "/images/tools_we_use/security_testing/Kali.png",
      name: "TTF",
    },
    {
      logo: "/images/tools_we_use/security_testing/nmap.png",
      name: "NMAP",
    },
    {
      logo: "/images/tools_we_use/security_testing/OWASP.png",
      name: "Charles",
    },
  ];

  return (
    <div>
      <ToolsSection title="Bug Tracking Tools" tools={BugTrackingTools} />;
      <ToolsSection title="Developer Tools" tools={DeveloperTools} />;
      <ToolsSection title="Developer Tools" tools={TeamColabTools} />;
      <ToolsSection title="Customer Relationship Management(CRM)" tools={CRM} />
      <ToolsSection title="Content Management System(CMS)" tools={CMS} />;
      <ToolsSection title="Test Management Tools" tools={Test_management} />;
      <ToolsSection title="Mobile Testing Tools" tools={MobileTools} />;
      <ToolsSection title="Test Automation Tools" tools={TestAutomation} />;
      <ToolsSection
        title="Security Testing Tools"
        tools={SecurityTestingTools}
      />
      <ToolsSection title="TestCase Management" tools={TestCase_management} />
      <ToolsSection title="Others" tools={Others} />
    </div>
  );
}
