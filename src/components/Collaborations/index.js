import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { Wrapper } from "./styles";
const api = {
    baseUrl: "https://api.github.com"
}

export default function Collaborations() {

    const [githubData, setGithubData] = useState([]);

    useEffect(() => {
        axios
            .get(api.baseUrl + "/repos/OpenDevUFCG/roadmap-cc/contributors")
            .then((res) => {
                setGithubData(res.data)
            });
    }, []);

    return (
        <>
            {githubData.map((contributorData) => (
                    <Wrapper>
                        <a href={`https://github.com/${contributorData.login}`} target="_blank">
                        <img    
                            key={contributorData.login}
                            src={contributorData.avatar_url} 
                            alt={contributorData.login}
                            style={{ width: 64, borderRadius: 40}}
                        />
                        </a>
                    </Wrapper>
            ))}
        </>
    );

};