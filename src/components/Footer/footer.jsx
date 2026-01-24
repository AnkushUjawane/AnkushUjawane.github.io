import React from "react";
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { GitHub, LinkedIn } from '@mui/icons-material'
import "./footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-intro">
                    <h1 className="footer-name">Ankush Ujawane</h1>
                    <h2 className="footer-role">Software Engineer</h2>
                </div>

                <div className="footer-info">
                    <div className="footer-contact">
                        <h1 className="footer-heading">Contact Information</h1>
                        <p>Email: ankushujawane18@gmail.com</p>
                        <p>Phone: +91 7517780013</p>
                        <p>Location: Akola, Maharashtra, India</p>
                    </div>

                    <div className="footer-connect">
                        <h1 className="footer-heading">Connect With Me</h1>
                        <Stack
                            className="footer-icons"
                            direction="row"
                            spacing={2}
                            alignItems="center"
                        >
                            <IconButton
                                aria-label="Github Profile"
                                href="https://github.com/AnkushUjawane"
                                target="_blank"
                                color="primary"
                            >
                                <GitHub sx={{ fontSize: 36 }} />
                            </IconButton>

                            <IconButton
                                aria-label="LinkedIn Profile"
                                href="https://www.linkedin.com/in/ankushujawane/"
                                target="_blank"
                                color="primary"
                            >
                                <LinkedIn sx={{ fontSize: 36 }} />
                            </IconButton>
                        </Stack>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer; 