import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import app  from '../components/Application'

const pages = import.meta.glob('../pages/**/*.tsx')

document.addEventListener('DOMContentLoaded', () => {
    app()
});

