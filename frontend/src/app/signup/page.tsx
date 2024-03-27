import AuthenticationForm from '@/components/AuthenticationForm/AuthenticationForm'
import { Box } from '@mui/material'

const page = () => {
    return (
        <Box>
            <AuthenticationForm mode='signup' />
        </Box>
    )
}

export default page