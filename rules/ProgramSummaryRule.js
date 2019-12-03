import {ProgramRule} from 'rules-config/rules';

@ProgramRule({
    name: "Titlee Program Summary",
    uuid: "914b55a2-4bc7-439f-909c-1531301caaa9",
    programUUID: "531c41c7-fb09-4175-918e-f83b1fe6f2e1",
    executionOrder: 100.0,
    metadata: {}
})
class TitleeProgramRule {
    static exec(programEnrolment, summaries, context, today) {
        const birthWeight = programEnrolment.findObservationInEntireEnrolment('Birth Weight');
        if (birthWeight) {
            summaries.push({name: 'Birth Weight', value: birthWeight.getValue()});
        }

        return summaries;
    }
}

module.exports = {TitleeProgramRule};

