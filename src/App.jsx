import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard/TwitterFollowCard'
import {useState} from 'react';

const users = [
    {
        userName: 'bmthofficial',
        name: 'Bring Me The Horizon',
        isFollowing: true
    },
    {
        userName: 'Koldo_LoL',
        name: 'Koldo',
        isFollowing: true
    },
    {
        userName: 'kikobeats',
        name: 'Fan Beats',
        isFollowing: true
    },
    {
        name: 'John Harper',
        isFollowing: true
    },
]

export function App (){
    return(
    <section className='app'>
        {
            users.map(({userName, name, isFollowing})=>{
                return (
                    <div>
                    <TwitterFollowCard 
                    key={userName} 
                    userName={userName} 
                    isFollowing={false} 
                    initialIsFollowing={false}>
                        {name}
                    </TwitterFollowCard>
                    </div>
                )
            })
        }
    </section>
    )
}