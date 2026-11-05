package fi.haagahelia.smarthhealth.web.dto;

import jakarta.validation.Validation;
import jakarta.validation.Validator;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class SymptomSearchRequestTest {

    private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    @Test
    void requiresAtLeastThreeSymptoms() {
        assertFalse(validator.validate(new SymptomSearchRequest(List.of("cough", "fever"))).isEmpty());
        assertTrue(validator.validate(new SymptomSearchRequest(List.of("cough", "fever", "fatigue"))).isEmpty());
    }

    @Test
    void rejectsBlankSymptoms() {
        assertFalse(validator.validate(new SymptomSearchRequest(List.of("cough", " ", "fatigue"))).isEmpty());
    }
}
