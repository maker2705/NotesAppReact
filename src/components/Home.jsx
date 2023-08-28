import Navbbar from "./Navbar";
import NoteCreationForm from "./NoteCreationForm";

function Home() {
  return (
    <div className="bg-[#939771] flex ">
      <Navbbar />
      {/* <div className="text-center bg-[#767c40]  justify-center sm: lg:w-[1280px] md:w-[1024px] h-[200px] mx-auto my- rounded shadow">
          <h1 className="text-2xl text-white">
            Today&apos;s Tasks
          </h1>
          
        </div> */}

        <div className="container mx-auto p-8">
        <h2 className="text-2xl font-semibold flex justify-center text-white mb-4">All Notes</h2>
        

      <NoteCreationForm/>
        {/* <div className=" newNote bg-white p-4 rounded flex shadow">

        </div> */}
      </div>
    </div>
  );
}

export default Home;


// bg-[#CCCDB6]