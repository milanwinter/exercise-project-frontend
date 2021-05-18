import { MenuItem, MenuList } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'


export default function Navbar() {


    return (
        <div>
            <Menu> 
                <MenuList>
                   <MenuItem>Profile</MenuItem> 
                </MenuList>
                
            </Menu>
        </div>
    )
}