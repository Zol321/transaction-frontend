// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Stepper from '@mui/material/Stepper';
// import * as React from 'react';
// import Currency from '../components/Currency';
// import Balance from '../components/Balance';
// import Finish from '../components/Finish';

// const steps = ['Currency', 'Balance', 'Finish'];

// export default function SetUp() {
//     const [activeStep, setActiveStep] = React.useState(0);
//     const [skipped, setSkipped] = React.useState(new Set<number>());

//     const isStepOptional = (step: number) => {
//         return step === 1; 
//     };
//     const isStepSkipped = (step: number) => {
//         return skipped.has(step);
//     };

//     const handleNext = () => {
//         let newSkipped = skipped;
//         if (isStepSkipped(activeStep)) {
//             newSkipped = new Set(newSkipped.values());
//             newSkipped.delete(activeStep);
//         }
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//         setSkipped(newSkipped);
//     };

//     return (
//         <div>
//             <Stepper activeStep={activeStep} alternativeLabel>
//                 {steps.map((label, index) => {
//                     const stepProps: { completed?: boolean } = {};
//                     const labelProps: {
//                         optional?: React.ReactNode;
//                     } = {};
//                     if (isStepOptional(index)) {
//                         labelProps.optional = <em>(Optional)</em>;
//                     }
//                     if (isStepSkipped(index)) {
//                         stepProps.completed = false;
//                     }

//                     return (
//                         <Step key={label} {...stepProps}>
//                             <StepLabel {...labelProps} sx={{ minWidth: '400px' }}>{label}</StepLabel>
//                             {activeStep === 0 && label === 'Currency' && <Currency onNext={handleNext} />}
//                             {activeStep === 1 && label === 'Balance' && <Balance onNext={handleNext} />}
//                             {activeStep === 2 && label === 'Finish' && <Finish />}
//                         </Step>
//                     );
//                 })}
//             </Stepper>
//         </div>
//     );
// }
