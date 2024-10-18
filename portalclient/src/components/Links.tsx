import { Container, Link } from '@mui/material';
import React from 'react';

const Links: React.FC = (): React.ReactElement => {

    return (
        <Container sx={{
            backgroundImage: "linear-gradient(to right, rgb(0,0,70) , rgb(0,0,70), rgb(0,0,70), black)",
            color: "orange",
            borderRadius: 2,
            margin: 1,
            padding: 5
        }}>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://facebook.com"
                    target="_blank"
                    underline="hover"
                    sx={{
                        color: "white",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Facebook
                </Link>

            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://mail.google.com"
                    target="_blank"
                    sx={{
                        color: "white",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    GMAIL
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://netflix.com"
                    target="_blank"
                    sx={{
                        color: "white",
                        background: 'darkRed',
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Netflix
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://www.primevideo.com/"
                    target="_blank"
                    sx={{
                        color: "white",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Prime video
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://youtube.com"
                    target="_blank"
                    sx={{
                        color: "white",
                        background: "darkRed",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Youtube
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://www.planeta.pe/"
                    target="_blank"
                    sx={{
                        color: "yellow",
                        background: "black",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Radio Planeta
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://foreca.com"
                    target="_blank"
                    sx={{
                        color: "white",
                        background: "darkBlue",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Foreca
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://duolingo.com"
                    target="_blank"
                    sx={{
                        color: "black",
                        background: "rgb(67,237,53)",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Duolingo
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://westernunion.com"
                    target="_blank"
                    sx={{
                        color: "black",
                        background: "yellow",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Western Union
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://s-pankki.fi"
                    target="_blank"
                    sx={{
                        color: "white",
                        background: "green",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    S-pankki
                </Link>
            </Container>
            <Container
                sx={{
                    margin: 1
                }}
            >
                <Link
                    href="https://translate.google.com"
                    target="_blank"
                    sx={{
                        color: "white",
                        fontSize: 20,
                        borderRadius: 1,
                        margin: 1
                    }}
                >
                    Traductor
                </Link>
            </Container>
        </Container>
    );
}

export default Links;