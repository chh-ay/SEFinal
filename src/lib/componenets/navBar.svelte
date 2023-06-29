<script>
	import { loginUserSchema } from '$lib/schemas';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
  </script>
  
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img src="/src/lib/images/Main_logo.png" class="mr-9 h-12 sm:h-14" alt="Main Logo"/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
    </NavBrand>
    <div class="flex items-center md:order-2">
      <Avatar id="avatar-menu" src="/src/lib/images/user.png" />
      <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
      <span class="block text-sm"> Demo </span>
      <span class="block truncate text-sm font-medium"> Demo@svelte.com </span>
      </DropdownHeader>
      <DropdownItem>My Order</DropdownItem>
      <DropdownItem><a href="/register">login</a></DropdownItem>
      <DropdownDivider />
      <DropdownItem><form action="/logout" method="POST"><button>Logout</button></form></DropdownItem>
    </Dropdown>
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/">Store</NavLi>
      <NavLi href="/">Customization</NavLi>

    </NavUl>
  </Navbar>