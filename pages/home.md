---
layout: default
title: Welcome
permalink: /
---

{% assign upcoming_events = site.events | where_exp: "event", "event.date >= site.time" %}
{% if upcoming_events.size > 0 %}
    {% assign featured_event = upcoming_events | reverse | first %}

    <div class="home-event-highlight">
        <span class="highlight-label">Upcoming Event</span>
        <div class="event-card">
            <div class="event-meta">{{ featured_event.date | date: "%A, %B %d, %Y @ %H:%M" }}</div>
            <h2>{{ featured_event.title }}</h2>
            <div class="event-description">
                {{ featured_event.content | strip_html | truncatewords: 50 }}
            </div>
            <a class="button" href="{{ featured_event.url }}">View Event Details</a>
        </div>
    </div>
{% endif %}

<div class="flex-title">
    <h1>Welcome to Stellar Vector</h1>
</div>

Welcome to the virtual home of ***Stellar Vector***, a primarily academic CTF team associated with KU Leuven, located in the beautiful town of Leuven (coincidentally also the home of the Stella beer).
***Stellar Vector*** is the reboot of HacknamStyle, which was the reboot of a CTF team by the name of: The Electronic Mayhem.
Just to say that we’ve been participating in CTFs for well over a decade.
We welcome current and former students (bachelor, master, PhD) and any hacking aficionados located in Belgium, regardless of the level of expertise or experience.
We intend to participate in CTFs approximately on a monthly basis, and organize events to further improve (y)our hacking skills.

## Communication

Our [Discord Server]({{ site.social.discord_invite_link }}) is the main communication channel. Feel free to join, it's the best way to get to know everyone!
We also have a mailing list through [Google Groups]({{ site.social.mailing_list_url }}). When requesting access, tell us a bit about yourself!

If you would like to reach out, send us an email at [{{ site.email }}](mailto:{{ site.email }}).
