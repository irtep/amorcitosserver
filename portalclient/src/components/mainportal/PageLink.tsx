import { Container, Link } from '@mui/material';
import React from 'react';
import { LinkProps } from '../../data/data';

const PageLink: React.FC<LinkProps> = ({href, color, background, title}): React.ReactElement => {

    return (
        <Container sx={{
            margin: 1
        }}>
            <Link
                href={href}
                target="_blank"
                underline="hover"
                sx={{
                    color: `${color}`,
                    background: `${background}`,
                    fontSize: 20,
                    borderRadius: 1,
                    margin: 1
                }}
            >
                {title}
            </Link>
        </Container>
    );
}

export default PageLink;