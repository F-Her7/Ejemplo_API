import React from 'react';

import { Content, Box, Media, Image} from 'react-bulma-components/full';

const Contacts = ({blue_eyes, magician}) => {
  return (
      <div className="bg-gray-300">
          <center><h1 className="w-2/5 pt-8 font-bold text-black text-2xl">Yu-Gi-Oh! Protagonist and Antagonist Cards</h1></center>
          <div className="flex mt-8 justify-between mx-64">
              <div>
                    {blue_eyes.map((blue_eyes) => (
                        <div className=" w-64">
                            <div className="py-4 mb-4">
                                <img src={`https://storage.googleapis.com/ygoprodeck.com/pics/89631139.jpg`}/>
                                <h5 className="mt-2"><strong>Card:</strong> {blue_eyes.name}</h5>
                                <h5 className="mt-2"><strong>Type:</strong> {blue_eyes.type}</h5>
                                <h5 className="mt-2"><strong>Effect:</strong> {blue_eyes.desc}</h5>
                                <h5 className="mt-2"><strong>ATK:</strong> {blue_eyes.atk} / <strong>DEF:</strong> {blue_eyes.def} </h5>      
                            </div>
                        </div>
                    ))}
              </div>
              <div>
                    {magician.map((magician) => (
                        <div className=" w-64">
                            <div className="py-4 mb-4">
                                <img src={`https://storage.googleapis.com/ygoprodeck.com/pics/46986414.jpg`}/>
                                <h5 className="mt-2"><strong>Card:</strong> {magician.name}</h5>
                                <h5 className="mt-2"><strong>Type:</strong> {magician.type}</h5>
                                <h5 className="mt-2"><strong>Effect:</strong> {magician.desc}</h5>
                                <h5 className="mt-2"><strong>ATK:</strong> {magician.atk} / <strong>DEF:</strong> {magician.def}</h5>
                            </div>
                        </div>
                    ))}
              </div>
          </div>
      </div>

  )
};


export default Contacts;