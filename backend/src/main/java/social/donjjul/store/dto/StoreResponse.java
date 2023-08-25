package social.donjjul.store.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import social.donjjul.board.dto.BoardResponse;
import social.donjjul.store.domain.Store;

import java.util.List;

@Data
@NoArgsConstructor
public class StoreResponse {
    private Long id;
    private String name;
    private String industryName;
    private String city;
    private String streetAddress;
    private String groundAddress;
    private String detailAddress;
    private String openTime;
    private String zipCode;
    private String providedItem;
    private String provided_1;
    private String provided_2;
    private Double latitude;
    private Double longitude;
    private List<BoardResponse> boardList;

    public static StoreResponse of(Store store) {
        return new StoreResponse(
                store.getId(),
                store.getName(),
                store.getIndustryName(),
                store.getCity(),
                store.getStreetAddress(),
                store.getGroundAddress(),
                store.getDetailAddress(),
                store.getOpenTime(),
                store.getZipCode(),
                store.getProvidedItem(),
                store.getProvided_1(),
                store.getProvided_2(),
                store.getLatitude(),
                store.getLongitude()
        );
    }

    public static StoreResponse of(Store store, List<BoardResponse> boardList) {
        StoreResponse storeResponse = new StoreResponse(
                store.getId(),
                store.getName(),
                store.getIndustryName(),
                store.getCity(),
                store.getStreetAddress(),
                store.getGroundAddress(),
                store.getDetailAddress(),
                store.getOpenTime(),
                store.getZipCode(),
                store.getProvidedItem(),
                store.getProvided_1(),
                store.getProvided_2(),
                store.getLatitude(),
                store.getLongitude()
        );

        storeResponse.setBoardList(boardList);

        return storeResponse;
    }

    public StoreResponse(
            Long id,
            String name,
            String industryName,
            String city,
            String streetAddress,
            String groundAddress,
            String detailAddress,
            String openTime,
            String zipCode,
            String providedItem,
            String provided_1,
            String provided_2,
            Double latitude,
            Double longitude) {
        this.id = id;
        this.name = name;
        this.industryName = industryName;
        this.city = city;
        this.streetAddress = streetAddress;
        this.groundAddress = groundAddress;
        this.detailAddress = detailAddress;
        this.openTime = openTime;
        this.zipCode = zipCode;
        this.providedItem = providedItem;
        this.provided_1 = provided_1;
        this.provided_2 = provided_2;
        this.latitude = latitude;
        this.longitude = longitude;
        this.boardList = boardList;
    }
}
