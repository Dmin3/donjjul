package social.donjjul.common.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// NCP Object Storage 와 연동
@Configuration
public class AmazonS3Config {
    private static final String accessKey = "ri7Ho2G7u7rpxcMedAe8";
    private static final String secretKey = "Nb4ra5HHAlokrqS9nS6cWn5VV25In5Ty08Fig2m7";
    private static final String endPoint = "https://kr.object.ncloudstorage.com";
    private static final String regionName = "kr-standard";

    @Bean
    public AmazonS3 amazonS3() {
        return AmazonS3ClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                .build();
    }
}
