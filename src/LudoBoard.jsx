import { useState } from "react"
export default function LudoBoard(){
    let [Moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    let [arr,setarr]=useState(["no moves"]);
    let updateBlue=()=>{
        // console.log(Moves.blue);
        // setMoves((prevMoves)=>{
        //     return {...prevMoves,blue:prevMoves.blue+1} //here we always use spread method because when we change the value normally it wont affect the initial array/object so we pass copy with callback
        // });
        setarr((prevarr)=>{
            return [...prevarr,"blue moves"];
        });
        console.log(arr);
    }
    let updateYellow=()=>{
        console.log(Moves.yellow);
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1}
        });
    }
    let updateGreen=()=>{
        console.log(Moves.green);
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1}
        });
    }
    let updateRed=()=>{
        console.log(Moves.red);
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1}
        });
    }
    
    return(
        <div>
            <p>
                Game begins
            </p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves={Moves.blue}</p>
                <button onClick={updateBlue} style={{background:"blue"}}>+1</button>
                <p>Yellow moves={Moves.yellow}</p>
                <button onClick={updateYellow} style={{background:"yellow", color:"black"}}>+1</button>
                <p>Green moves={Moves.green}</p>
                <button onClick={updateGreen} style={{background:"green"}}>+1</button>
                <p>Red moves={Moves.red}</p>
                <button onClick={updateRed} style={{background:"red"}}>+1</button>
            </div>
        </div>
    )
}