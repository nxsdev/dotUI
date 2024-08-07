import { Button } from "@/lib/components/core/default/button";
import { Menu, MenuItem, MenuRoot } from "@/lib/components/core/default/menu";

export default function Demo() {
  return (
    <MenuRoot>
      <Button>Settings</Button>
      <Menu>
        <MenuItem shortcut="⌘N">New file</MenuItem>
        <MenuItem shortcut="⌘C">Copy link</MenuItem>
        <MenuItem shortcut="⌘⇧E">Edit file</MenuItem>
      </Menu>
    </MenuRoot>
  );
}
