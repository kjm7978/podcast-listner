import { CoreOutput } from './../../users/dtos/output.dto';
import { Podcast } from './../entities/podcast.entity';
import { Field,ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SeeSubscribeOutput extends CoreOutput {
  @Field(type => [Podcast], { nullable: true })
  subscriptions?: Podcast[];
}
