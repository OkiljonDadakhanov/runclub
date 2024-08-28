import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button
} from '@chakra-ui/react'

const ProfileMenu: React.FC = () => {

    return <Menu>
        <MenuButton as={Button} colorScheme='blue'>
            Profile
        </MenuButton>
        <MenuList>
            <MenuGroup title='Profile'>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Dashboard</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
            </MenuGroup>
        </MenuList>
    </Menu>
}

export default ProfileMenu

