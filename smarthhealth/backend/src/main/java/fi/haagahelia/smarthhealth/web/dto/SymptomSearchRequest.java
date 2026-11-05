package fi.haagahelia.smarthhealth.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;

public record SymptomSearchRequest(
        @NotNull
        @Size(min = 3)
        List<@NotBlank String> symptoms
) {
}
