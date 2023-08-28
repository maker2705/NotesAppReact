import { useState, useRef } from "react";


function NoteCreationForm() {

        const [expand, setExpand] = useState(false);
        const contentEditable = useRef(null)
        function handleExpand(){
            setExpand(true);
            contentEditable.current.focus(true)
        } 

  return (  
    <div className="newNote text-white shadow-xl shadow-[#747E5F] " >
        {expand ? (
            <>
                <input 
        type="text"
        placeholder="Title"
        className = "w-full p-2 rounded-lg bg-[#5B654B] text-white focus:outline-none "
         />


         <div
         ref={contentEditable}
         contentEditable
         aria-label="Take a note..."
         role=""
         aria-multiline= "true"
         className="  w-full p-2 mt-1 focus:outline-none rounded-lg bg-[#5B654B] "
         >
         </div>

         <button
        
         className=" bg-[#5B654B] mt-1 px-6 py-2 rounded-md hover:bg-[#364F2A] "
         >
            Save
         </button>
            </>) : 
             (
            <>
            <input 
        type="text"
        onClick={handleExpand}
        placeholder="Click to take a note..."
        className = "w-full p-2 rounded-lg bg-[#5B654B] text-white focus: outline-none "
         />
            </>
         )

        }
    </div>
  )
}

export default NoteCreationForm





{/*  */}









// import { useState } from 'react';

// function NoteCreationForm() {
//   const [expanded, setExpanded] = useState(false);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleExpand = () => {
//     setExpanded(true);
//   };

//   const handleSave = () => {
//     // Implement save functionality here
//     // You can use the 'title' and 'content' states to save the note
//     // Reset the input fields and expanded state after saving
//     setTitle('');
//     setContent('');
//     setExpanded(false);
//   };

//   return (
//     <div className="newNote bg-white p-4 rounded flex shadow">
//       {!expanded ? (
//         <input
//           type="text"
//           placeholder="Add a new note..."
//           onClick={handleExpand}
//           className="w-full py-2 px-4 rounded border focus:outline-none"
//         />
//       ) : (
//         <div className="w-full space-y-4">
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full py-2 px-4 rounded border focus:outline-none"
//           />
//           <textarea
//             placeholder="Content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             rows="4"
//             className="w-full py-2 px-4 rounded border focus:outline-none"
//           />
//           <button
//             onClick={handleSave}
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           >
//             Save
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NoteCreationForm;
