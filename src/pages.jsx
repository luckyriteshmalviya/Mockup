import { useState } from "react";
import Input from "./input";

function PageOne(props) {
const[fName, setfName] = useState("")
const[dName, setdName] = useState("")

  return (
    <>
      <img
        src="public\WhatsApp Image 2022-08-09 at 7.32.17 PM.jpeg"
        alt="Eden"
      />
      <div>Stepper</div>
      <br />
      <h2>Welcome! First thinks first.... </h2>
      <div> You can always change them later.</div>
      <br />
      <form>
      <Input label={"First Name"} callback={(e) =>{setfName(e.target.value)}} value={fName} placeholdername={"Steve Jobs"}/>
        <br />
      <Input label={"Display Name"} callback={(e) =>{setdName(e.target.value)}} value={dName} placeholdername={"Steve"} />        
      </form>
    </>
  );
}


function PageTwo() {
  return (
    <>
      <img
        src="public\WhatsApp Image 2022-08-09 at 7.32.17 PM.jpeg"
        alt="Eden"
      />
      <div>Stepper-bar</div>
      <br />
      <h2>
        Let's set up a home for all your work</h2>
      <div> You can always create
        another workspace later.
      </div>
      <br />
      <form>
        <Input label={"Workspace Name"} placeholdername={"Eden"} />
        <br />
        <br />
        <Input label={"Workspace URL (Optional)"} placeholdername={"www.Eden.com/"} />
        <br />
      </form>   
    </>
  );
}


function PageThree() {
  return (
    <>
      <img
        src="public\WhatsApp Image 2022-08-09 at 7.32.17 PM.jpeg"
        alt="Eden"
      />
      <br />
      <div>Stepper-bar</div>
      <br />
      <h2>
        How are you planning to use Eden? </h2>
      <div> We'll streamline your setup
        experience accordingly.
      </div>
      <br />
      <div className="edenPlans">
        <div className="plansOption"><h3>For myself</h3>
        Write better. Think more clearly. Stay organized
        </div>
        <div className="plansOption"><h3>With my team</h3>
        Wikis, docs, tasks & projects, all in one place.</div>
      </div>
      <br />
    </>
  );
}


function PageFour() {
  return (
    <>
      <img
        src="public\WhatsApp Image 2022-08-09 at 7.32.17 PM.jpeg"
        alt="Eden"
      />
      <br />
      <div>Stepper-bar</div>
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
