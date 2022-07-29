window.onload = () => {
    console.log("I can't")
    includeDistributions()
    includeDeskEnvs()
}

function includeDistributions() {
    let popularDistributions = ["Arch", "CentOS", "Debian", "Fedora", "Oracle", "Kali", 
        "Kubuntu", "LXLE", "Manjaro", "Mint", "NetBSD", "OpenBSD", "Red Hat", "SteamOS", "SUSE", "Ubuntu", "Xubuntu"];
    let otherDistributions = ["3CX", "4MLinux", "Absolute", "AcademiX", "AlmaLinux",
        "Alpine", "ALT", "Anarchy", "antiX", "APODIO", "ArchBang", "Archcraft", "ArchLabs", "Archman",
        "ArchStrike", "ArcoLinux", "Armbian", "Artix", "AV Linux", "BackBox",
        "Baruwa", "Batocera", "Bedrock", "Berry", "Bicom", "BigLinux", "BlackArch", "BlueOnyx", "Bluestar", "Bodhi", "BOSS", "BSDRP", "BunsenLabs", "CAELinux",
        "CAINE", "Calculate", "Canaima", "Clear", "ClearOS", "Clonezilla", "CloudReady", "CRUX", "Daphile", "Debian Edu",
        "deepin", "Devuan", "Diamond", "DietPi", "DragonFly", "EasyOS", "Elastix", "eLearnix", "elementary", "Elive", "Emmabuntüs",
        "EndeavourOS", "Endian", "Endless", "Enso", "EuroLinux", "Exe", "Exherbo", "ExTiX", "Fatdog64", "Feren", "Finnix", "FreedomBox", "FreePBX", "Freespire", "FuguIta",
        "Funtoo", "FWUL", "Garuda", "Gecko", "Gentoo", "GhostBSD", "GoboLinux", "GParted", "Greenie", "Grml", "Guix", "Haiku", "HamoniKR", "HardenedBSD", "Hyperbola",
        "IPFire", "JingOS", "Kaisen", "KANOTIX", "KaOS", "Karoshi", "KDE neon", "KISS", "KNOPPIX", "Kodachi", "KolibriOS", "Lakka", "LFS", "LibreELEC", "Linspire",
        "Linuxfx", "Lite", "Live Raizo", "LliureX", "LockBox", "Lubuntu", "Mabox", "Mageia", 
        "MakuluLinux", "MAX", "MidnightBSD", "Miracle", "Murena", "MX Linux", "Navy", "Neptune", 
        "Netrunner", "NexentaStor", "Nitrux", "NixOS", "NomadBSD", "Nova", "NST", "NuTyX", 
        "OB2D", "Obarun", "Omarine", "Omoikane", "FreeBSD", "OpenIndiana", "openmamba", "OpenMandriva", 
        "OpenMediaVault", "openSUSE", "OPNsense", "OSGeoLive", "OSMC", "OviOS", "PakOS", "paldo", 
        "Parabola", "Pardus", "Parrot", "Parted Magic", "PCLinuxOS", "Pearl", "Pentoo", "Peppermint", 
        "pfSense", "Photon", "Pisi", "Plamo", "PLD", "Plop", "Pop!_OS", "Porteus",
        "Porteus Kiosk", "postmarketOS", "PrimTux", "Proxmox", "Puppy", "PureOS", "Q4OS", "Qubes", 
        "RasPiOS", "RasPlex", "RDS", "ReactOS", "RebeccaBlackOS", "RebornOS", "Recalbox", "Redcore", 
        "Redo", "Refracta", "Regata", "REMnux", "Rescatux", "Rescuezilla", "RISC", "Robolinux", 
        "Rocks Cluster", "Rockstor", "Rocky", "ROSA", "RSS", "Runtu", "Salient", "Salix", 
        "Scientific", "SELKS", "Septor", "Shark", "siduction", "Simplicity", "Slackel", "Slackware",
        "Slax", "SliTaz", "SmartOS", "SME Server", "Smoothwall", "Snal", "Solaris", "Solus", "SolydXK", "Sophos", 
        "Source Mage", "SparkyLinux", "Springdale", "Star", "Super Grub2", "SuperGamer", "Swift", "SysLinuxOS", "SystemRescue", "T2", 
        "Tails", "Thinstation", "Tiny Core", "ToOpPy", "Trisquel", "TrueNAS", "TurnKey", "UBOS", "UBports", "Ubuntu Budgie",
        "Ubuntu Christian", "Ubuntu DP", "Ubuntu Kylin", "Ubuntu MATE", "Ubuntu Studio", "Ufficio Zero", "Ultimate", "Ultramarine", "Univention", 
        "Untangle", "Uruk", "Venom", "Vine", "Void", "Volumio", "Voyager", "VyOS", "VzLinux", 
        "Whonix", "Wifislax", "XigmaNAS", "XStreamOS", "YunoHost", "Zentyal", "Zenwalk", "Zephix", "Zevenet", "Zorin"];
    popularDistributions = popularDistributions.sort((a, b) => .5 - Math.random());
    otherDistributions = otherDistributions.sort((a, b) => .5 - Math.random());
    const distributions = popularDistributions.concat(otherDistributions);
    let distroSelect = document.getElementById("distro-select");
    for (const dist of distributions) {
        const option = document.createElement("option");
        const text = document.createTextNode(dist);
        option.appendChild(text);
        distroSelect.appendChild(option)
    }    
}

function includeDeskEnvs() {
    const deskEnvs = ["3CX", "GNOME", "Xfce", "Cinnamon", "MATE", "LXQt", "KDE Plasma", "Budgie", "LXDE", "Pantheon", "Sugar", "UKUI"];
    let deskEnvSelect = document.getElementById("desk-env-select");
    for (const deskEnv of deskEnvs) {
        const option = document.createElement("option");
        const text = document.createTextNode(deskEnv);
        option.appendChild(text);
        deskEnvSelect.appendChild(option);
    }    
}

function displayDistro(display=true) {
    let linuxDistro = document.getElementById("linux-distro");
    linuxDistro.hidden = !display;
}

function displayDeskEnv(display=true) {
    let linuxDeskEnv = document.getElementById("linux-desk-env");
    linuxDeskEnv.hidden = !display;
}


function displayLinus() {
    displayDistro(false)
    displayDeskEnv(false)
    let computing = document.getElementById("computing")
    computing.hidden = false;
    setTimeout(() => {
        computing.hidden = true;
        let linus = document.getElementById("linus");
        linus.hidden = false;
    }, 3000);
}