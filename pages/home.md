---
layout: default
title: Home
permalink: /
---

{% assign upcoming_events = site.events | where_exp: "event", "event.date >= site.time" %}
{% if upcoming_events.size > 0 %}
{% for event in upcoming_events reversed %}

<div class="event">
    <h1>{{ event.title }} - {{ event.date | date: "%B %d" }}</h1>
    {{ event.content }}
</div>

{% endfor %}
{% endif %}

# Home

Welcome to the virtual home of ***Stellar Vector***, a primarily academic CTF team associated with KU Leuven, located in the beautiful town of Leuven (coincidentally also the home of the Stella beer).
***Stellar Vector*** is the reboot of HacknamStyle, which was the reboot of a CTF team by the name of: The Electronic Mayhem.
Just to say that we’ve been participating in CTFs for well over a decade.
We welcome current and former students (bachelor, master, PhD) and any hacking aficionados located in Belgium, regardless of the level of expertise or experience.
We intend to participate in CTFs approximately on a monthly basis, and organize events to further improve (y)our hacking skills.

# Communication

Join our mailing list via [Google Groups]({{ site.social.mailing_list_url }}). When requesting access, tell us a bit about yourself!
Also feel free to join our [Discord Server]({{ site.social.discord_invite_link }}). Please choose a name on Discord that allows us to identify you.

If you would like to reach out, send us an email at [{{ site.email }}](mailto:{{ site.email }}).
