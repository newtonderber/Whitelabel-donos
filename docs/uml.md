```mermaid
classDiagram
direction text

    class Configuration {
        <<Singleton>>
        +String INITIATIVE_NAME
        +String LOGO_URL
        +String PRIMARY_COLOR
        +String IMPRESSUM
        +String CONTACT_DATA
        +double LATITUDE
        +double LONGITUDE
        +loadFromEnv() void
    }

    class Donation {
        +String id
        +String title
        +Category Category
        +int amount
        +State state
        +Status status
        +Date endDate
        +Date addedDate
        +updateStatus(Status newStatus) void
    }

    class DonatorContacts {
        +String name
        +String email
        +String phoneNumber
        +anonymize() void
    }

    class RequestItem {
        +String id
        +String title
        +Category category
        +Priority priority
        +boolean active
    }

    class Category {
        <<enumeration>>
        KLEIDUNG
        LEBENSMITTEL
        ELEKTRONIK
        HAUSHALT
        SONSTIGES
    }

    class Condition {
        <<enumeration>>
        NEU
        GEBRAUCHT
    }

    class Stage {
        <<enumeration>>
        ANGEBOTEN
        ANGENOMMEN_AUF_LAGER
        RESERVIERT
        AUSGEGEBEN
    }
    
    class Priority {
        <<enumeration>>
        NIEDRIG
        MITTEL
        HOCH
        DRINGEND
    }
        

    Donation "1" --> "1" Category : categorized_as
    Donation "1" --> "1" Stage : currently_in
    Donation "1" --> "1" Condition : has
    Donation "1" --> "0..1" DonatorContacts : owns
    RequestItem "1" --> "1" Category : categorized_as
    RequestItem "1" --> "1" Priority : prioritized_as