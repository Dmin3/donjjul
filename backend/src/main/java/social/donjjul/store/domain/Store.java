package social.donjjul.store.domain;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Store{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 10)
    private String industryName;

    @Column(nullable = false)
    private String city;

    private String streetAddress;

    private String groundAddress;

    private String detailAddress;

    @Column(nullable = false)
    private String zipCode;

    @Column(nullable = false)
    private String providedItem;

    @Column(nullable = false)
    private String provided_1;

    private String provided_2;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    @Builder
    public Store(String name, String industryName, String city,
                 String streetAddress, String groundAddress,
                 String detailAddress, String zipCode, String providedItem,
                 String provided_1, String provided_2, Double latitude, Double longitude){
        this.name = name;
        this.industryName = industryName;
        this.city = city;
        this.streetAddress = streetAddress;
        this.groundAddress = groundAddress;
        this.detailAddress = detailAddress;
        this.zipCode = zipCode;
        this.providedItem = providedItem;
        this.provided_1 = provided_1;
        this.provided_2 = provided_2;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
