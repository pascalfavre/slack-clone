import React, { useEffect, useState } from 'react';
import "../styles/Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutilnedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from '../firebase';
import Message from './Message.js';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').
            doc(roomId).
            onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ));
        }

        db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp','asc')
            .onSnapshot((snapshot) => (
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                ))
            )
    }, [roomId]);

    console.log(roomDetails);
    console.log(roomMessages);
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutilnedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                { roomMessages.map((message) => (
                    <Message
                    message={message.message}
                    timestamp={message.timestamp}
                    user={message.user}
                    userImage={message.userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat
