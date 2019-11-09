const rulesConfigInfra = require("rules-config/infra");
const IDI = require("openchs-idi");

module.exports = IDI.configure(
  {
    name: "Ayu",
    "chs-admin": "admin",
    "org-name": "Ayu",
    "org-admin": "admin@ayu",
    secrets: "../secrets.json",
    files: {
      adminUsers: {
        dev: ["users/admin-user.json"],
        prerelease: ["users/staging-admin-user.json"]
      },
      forms: [
        "forms/Baseline.json",
        "forms/Registration.json",
        "forms/sdfs.json",
        "forms/Birth Registration.json",
        "forms/test form.json",
        "forms/Test form123.json",
        "Titlee Enrolment Form.json"
      ],
      formMappings: ["formMappings.json"],
      formDeletions: [],
      formAdditions: [],
      catchments: ["catchments.json"],
      checklistDetails: [],
      concepts: ["concepts.json"],
      addressLevelTypes: ["addressLevelTypes.json"],
      locations: ["locations.json"],
      programs: ["programs.json"],
      encounterTypes: ["encounterTypes.json"],
      operationalEncounterTypes: ["operationalEncounterTypes.json"],
      operationalPrograms: ["operationalPrograms.json"],
      subjectTypes: ["subjectTypes.json"],
      operationalSubjectTypes: ["operationalSubjectTypes.json"],
      users: {
        dev: ["users/dev-user.json"]
      },
      rules: [],
      organisationSql: [
        /* "create_organisation.sql"*/
      ]
    }
  },
  rulesConfigInfra
);
