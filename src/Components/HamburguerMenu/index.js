import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'
import { AiFillHome, AiOutlineUsergroupDelete, AiOutlineNodeIndex, AiOutlineCoffee } from "react-icons/ai";
import { Link } from 'react-router-dom';

function scrollTop(){
    window.scrollTo(500, 0)
}

export default function HamburgerMenu() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
            <Link to="/" onClick={scrollTop()}><MenuItem icon={<AiFillHome />}>
                Home
                </MenuItem></Link>
                <Link to="/" onClick={scrollTop()}><MenuItem icon={<AiOutlineUsergroupDelete />}>
                Sobre nós
                </MenuItem></Link>
                <Link to="/" onClick={scrollTop()}><MenuItem icon={<AiOutlineNodeIndex />} >
                Trilhas
                </MenuItem></Link>
                <a href="https://opendevufcg.org/" target="_blank"><MenuItem icon={<AiOutlineCoffee />} >
                Opendev
                </MenuItem></a>
            </MenuList>
        </Menu>
    )
}