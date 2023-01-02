var headerText = "DFIR Bingo";

var footerText = "Last edited: Oct 12, 2022";

var winText = "We got a Winner";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var JSONBingo = {"squares": [
        {"square": "Urgent Request"},
        {"square": "Customer not reachable."},
        {"square": "Incident older than 24 hours."},
        {"square": "Urgent Request and contact Friday 4:00pm+"},
        {"square": "No Logging was implemented."},
        {"square": "Customer not able to follow instructions written in Readme File."},
        {"square": "Head of IT not available."},
        {"square": "Default User and Password Combination."},
        {"square": "Privileged User with weak password."},
        {"square": "Unpatched system as entry point."},
        {"square": "Exposed Service with Default Login Credentials."},
        {"square": "Outdated system and no longer in production."},
        {"square": "Planned migration to the cloud."},
        {"square": "No Antivirus installed."},
        {"square": "Server is only used for certain remaining devices or applications."},
        {"square": "Administration via Domain-Administrator Account."},
        {"square": "Customer not able to follow given instructions."},
        {"square": "Unpatched System."},
        {"square": "Upcoming migration to new hardware."},
        {"square": "IT realized by 2 people."},
        {"square": "CISO not available for further questions."},
        {"square": "No MFA available / enforced."},
        {"square": "Log4J"},
        {"square": "Hafnium"},
        {"square": "No Backup"},
        {"square": "Phishing"},
        {"square": "Ransomware"},
        {"square": "Exchange CVE"},
        {"square": "Citrix CVE"},
        {"square": "Weak Password"},
        {"square": "EDR/XDR Licenses purchased, but not implemented yet."},
    ]
};
