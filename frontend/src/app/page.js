import React from 'react'
import Wrapper from './layout-wrapper/wrapper'
import Home from './(home)/page';

export const metadata = {
    title: "Home - Homez",
};

export default function MainRoot() {
    return (
        <Wrapper>
            <Home />
        </Wrapper>
    );
}
