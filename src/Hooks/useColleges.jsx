// import { useEffect, useState } from "react";


// const useMenu = () => {
//   const [menu, setMenu] = useState([]);
//   const [loading,setLoading]=useState(true);
//   useEffect(() => {
//     fetch("menu.json")
//       .then((res) => res.json())
//       .then(data=> {
//         setMenu(data);
//         setLoading(false);
//       });


//   }, []);
//   return [menu,loading];
// };


// export default useMenu;
import  { useEffect, useState } from 'react';

const useColleges = () => {
    const [colleges,setColleges]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch("colleges.json")
            .then((res)=>res.json())
            .then(data=>{
                setColleges(data);
                setLoading(false);
            });
    },[]);
    return [colleges,loading];
};

export default useColleges;