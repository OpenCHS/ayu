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
      forms: [],
      formMappings: [],
      formDeletions: [],
      formAdditions: [],
      catchments: [],
      checklistDetails: [],
      concepts: [],
      locations: [],
      programs: [],
      encounterTypes: [],
      operationalEncounterTypes: [],
      operationalPrograms: [],
      subjectTypes: [],
      users: {
        dev: []
      },
      rules: [],
      organisationSql: [
        /* "create_organisation.sql"*/
      ]
    }
  },
  rulesConfigInfra
);
