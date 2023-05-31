import './Live.css';
import get from '../../services/getServices';
import post from '../../services/postServices';
import LiveGrid from '../Map/LiveGrid';
import RobotLiveData from '../Info/RobotLiveData';
import { useEffect, useState } from 'react';

async function getImgFromServerAndStartRobot(setImg) {
    let res = await get.Map();
    console.log(res);
    if (res === null) {
        // failed to retrive the map
        alert("failed to retrive the map, try again later");
        return;
    }
    setImg(res);
    post.startRobotSimulator();
}


function Live(props) {

    const { uploadMap, uploadConfigRooms, uploadRobotConfigurations } = props;

    const [isLive, setIsLive] = useState(false);
    const [img, setImg] = useState(null); // the map image
    const handleBtn = (event) => {
        event.preventDefault();
        // if(img === null){
        //     alert("problem with loading the map from the server, try again later")
        //     return;
        // }
        setIsLive(!isLive);
    }

    useEffect(() => {
        if (isLive) {
            // getting the map from the server
            getImgFromServerAndStartRobot(setImg);

        }
    }, [isLive])

    if (!uploadMap || !uploadConfigRooms || !uploadRobotConfigurations) {
        return (
            <div className="conatiner live-page mt-5">
                <h4>
                    <u><b>This is the live broadcast page, from here you can see the robot's movements in real time.</b></u>
                </h4>
                <div className="row"> {
                    !isLive && (
                        <div className='col-6 right'>
                            <button
                                className='btn btn-warning disabled'
                                onClick={() => { alert("You should first upload the neccesry files!") }}>START ROBOT</button>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }

    return (
        <div className="conatiner live-page mt-5">
            <h4>
                <u><b>This is the live broadcast page, from here you can see the robot's movements in real time.</b></u>
            </h4>
            <div className="row"> {
                !isLive && (
                    <div className='col-6 right'>
                        <button
                            className='btn btn-warning'
                            onClick={handleBtn}>START ROBOT</button>
                    </div>
                )
            }
                {
                    isLive && img && (
                        <div className='col-6 right'>
                            <button
                                className='btn btn-danger'
                                onClick={handleBtn}>STOP ROBOT</button>
                        </div>
                    )
                }
            </div>
            {isLive && img && (<div className='d-flex'>
                <div className='col-7'>
                    {/* here the map going to be */}
                    <LiveGrid img={img} />
                </div>
                <div className='col-5'>
                    <RobotLiveData />
                </div>
            </div>

            )}
        </div>
    );
}

export default Live;