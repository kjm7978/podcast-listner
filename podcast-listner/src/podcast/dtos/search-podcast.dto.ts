import { CoreOutput } from './../../users/dtos/output.dto';
import { Field, InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';

@InputType()
export class SearchPodcastInput
{
    @Field(type=>String, {nullable:true})
    query : string ;
}


@ObjectType()
export class SearchPodcastOutput extends CoreOutput{
    @Field(type=>[Podcast], {nullable:true})
    podcasts? : Podcast[];
}