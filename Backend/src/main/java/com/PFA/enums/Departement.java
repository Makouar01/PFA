package com.PFA.enums;

import java.util.Arrays;

public enum Departement {
    Fonctionaire,
    DAF,
    DPH,
    DEP,
    DGDRE;

    // Method to convert a string to a Departement enum
    public static Departement fromString(String departement) {
        return Arrays.stream(Departement.values())
                .filter(d -> d.name().equalsIgnoreCase(departement))
                .findFirst()
                .orElse(null); // or a default value, e.g., Fonctionaire
    }
}
