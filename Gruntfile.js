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
        // "forms/Baseline.json",
        // "forms/Registration.json",
        // "forms/sdfs.json",
        // "forms/Birth Registration.json",
        // "forms/test form.json",
        // "forms/Test form123.json",
        // "forms/Titlee Enrolment Form.json",
        "forms/checklistForm.json"        
      ],
      formMappings: ["formMappings.json"],
      formDeletions: [],
      formAdditions: [],
      catchments: ["catchments.json"],
      checklistDetails: ["checklist.json"],
      concepts: ["concepts.json",
                  "checklistConcepts.json",
                  "vaccinationConcepts.json"
              ],
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
      rules: ["./rules.js"],
      organisationSql: [
        /* "create_organisation.sql"*/
      ],
      "organisationConfig": ["organisationConfig.json"],
      "translations": [
        "translations/en.json"
      ]
    }
  },
  rulesConfigInfra
);
