import { useState } from "react";
import Input from "./input";
import {StepperFill} from "./Stepper"


function PageOne({fInput, dInput, callbackfunc, callbackfunc2}) {
  return (
    <>
      <img className="edenLogo"
        src="public\WhatsApp Image 2022-08-09 at 7.32.17 PM.jpeg"
        alt="Eden"
      />
      <div className="stepper"><img src="public\stepper 1.jpeg" /></div>
      <br />
      <h2>Welcome! First thinks first.... </h2>
      <div className="subtitle"> You can always change them later.</div>
      <br />
      <form className="form">
      <Input label={"First Name"} value={fInput} callback={(e)=>callbackfunc(e)}  placeholdername={"Steve Jobs"} /> 
        <br />
      <Input label={"Display Name"} value={dInput} callback={(e)=>callbackfunc2(e)} placeholdername={"Steve"} />        
      </form>;
    </>
  );
}


function PageTwo() {
  return (
    <>
      <img className="edenLogo"
        src="public\WhatsApp Image 2022-08-09 at 7.32.17 PM.jpeg"
        alt="Eden"
      />
      <div className="stepper"><img src="public\stepper2.jpeg" /></div>
      <h2>
        Let's set up a home for all your work</h2>
      <div> You can always create
        another workspace later.
      </div>
      <br />
      <form className="form">
        <Input label={"Workspace Name"} placeholdername={"Eden"} />
        <br />
        <Input label={"Workspace URL (Optional)"} placeholdername={"www.Eden.com/"} />
      </form>   
    </>
  );
}


function PageThree() {
  return (
    <>
      <img className="edenLogo"
        src="public\WhatsApp Image 2022-08-09 at 7.32.17 PM.jpeg"
        alt="Eden"
      />
      <div className="stepper"><img src="public\Stepper 3.jpeg" /></div>
      <h2>
        How are you planning to use Eden? </h2>
      <div> We'll streamline your setup
        experience accordingly.
      </div>
      <br />
      <div className="edenPlans">
        <div className="plansOption">
          <div>logo</div>
          <h5 className="headingOfThirdPage">For myself</h5>
        Write better. Think more clearly. Stay organized
        </div>

        <div className="plansOption">
        <div>logo</div>
          <h5 className="headingOfThirdPage">With my team</h5>
        Wikis, docs, tasks & projects, all in one place.</div>
      </div>
    </>
  );
}


function PageFour() {
  return (
    <>
      <img className="edenLogo"
        src="public\WhatsApp Image 2022-08-09 at 7.32.17 PM.jpeg"
        alt="Eden"
      />
      <br />
      <div className="stepper"><img src="public\Stepper 4.jpeg" /></div>
      <div><img src="public\WhatsApp Image 2022-08-10 at 9.11.02 AM.jpeg"  alt="All Correct"/></div>
      <h2>Congratulations, Eren! </h2>
      <div>
        you have completed onboarding, you can start using the Eden!
      </div>
      <br />
    </>
  );
}

export { PageOne, PageTwo, PageThree, PageFour };
