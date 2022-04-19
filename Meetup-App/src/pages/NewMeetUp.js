import NewMeetUpForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

/*============================================================================================================
1. Change the Import to:
import { useNavigate } from "react-router-dom";

2. Set your const variable as:
const navigate = useNavigate();

3. Replace history.replace("/") with:
navigate("/", { replace: true });
============================================================================================================*/

function NewMeetUp() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-tutorial-d3d8e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUp;
