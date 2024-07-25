import PropTypes from 'prop-types';
import { LoginPage } from '../../../auth/pages';

export const Root = () => {
    return ( <LoginPage />)
    }

Root.propTypes = 
    {
        loggedInUser: PropTypes.object,
    }